import { AuctionBadge } from './AuctionBadge';

export const AuctionCard = ({ title, price, timeLeft, status, imageUrl, isLoading }) => {
  
  if (isLoading) {
    return (
      <div className="max-w-sm rounded-xl border border-gray-200 p-4 animate-pulse bg-white">
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="flex justify-between items-center mb-6">
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded w-16"></div>
            <div className="h-6 bg-gray-200 rounded w-20"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>
        <div className="h-12 bg-gray-200 rounded-lg w-full"></div>
      </div>
    );
  }

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white p-4 transition-all hover:shadow-2xl">
      {/* Imagen con Badge superpuesto */}
      <div className="relative">
        <img className="w-full h-48 object-cover rounded-lg" src={imageUrl} alt={title} />
        <div className="absolute top-2 left-2">
          <AuctionBadge status={status} label={status === 'urgent' ? 'TERMINA PRONTO' : 'EN VIVO'} />
        </div>
      </div>

      {/* Info de la subasta */}
      <div className="py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800 line-clamp-1">{title}</h3>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-gray-500 text-sm font-medium">Oferta actual</p>
            <p className="text-2xl font-black text-auction-primary">${price}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Cierra en</p>
            <p className="text-gray-800 font-bold">{timeLeft}</p>
          </div>
        </div>
      </div>

      {/* Botón de Acción */}
      <button className="w-full bg-auction-primary hover:brightness-110 text-white font-bold py-3 rounded-lg transition-all active:scale-95 cursor-pointer">
        PUJAR AHORA
      </button>
    </div>
  );
};