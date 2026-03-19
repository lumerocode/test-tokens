import { AuctionCard } from './AuctionCard';

export default {
  title: 'Auction/Card',
  component: AuctionCard,
  argTypes: {
    isLoading: { control: 'boolean' },
  }
};

export const Default = {
  args: {
    title: 'iPhone 15 Pro Max - Titanium',
    price: '850.00',
    timeLeft: '05m 22s',
    status: 'urgent',
    imageUrl: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=400',
    isLoading: false,
  },
};

export const LoadingState = {
  args: {
    isLoading: true,
  },
};