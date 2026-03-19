import { AuctionBadge } from './AuctionBadge';

export default {
  title: 'Auction/Badge',
  component: AuctionBadge,
};

export const Live = {
  args: {
    status: 'urgent',
    label: '¡SUBASTA EN VIVO!',
  },
};

export const Finished = {
  args: {
    status: 'neutral',
    label: 'Finalizada',
  },
};