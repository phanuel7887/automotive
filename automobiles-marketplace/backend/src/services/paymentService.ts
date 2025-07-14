import { Stripe } from 'stripe';
import { Order } from '../models/order';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2020-08-27',
});

export const createPaymentIntent = async (amount: number, currency: string) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    return paymentIntent;
  } catch (error) {
    throw new Error(`Payment Intent Creation Failed: ${error.message}`);
  }
};

export const confirmPayment = async (paymentIntentId: string) => {
  try {
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
    return paymentIntent;
  } catch (error) {
    throw new Error(`Payment Confirmation Failed: ${error.message}`);
  }
};

export const processOrderPayment = async (orderId: string, paymentDetails: any) => {
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      throw new Error('Order not found');
    }

    const paymentIntent = await createPaymentIntent(order.totalAmount, 'usd');
    // Here you would typically save the payment details to the order
    order.paymentStatus = 'Paid';
    await order.save();

    return paymentIntent;
  } catch (error) {
    throw new Error(`Order Payment Processing Failed: ${error.message}`);
  }
};