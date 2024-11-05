import React from "react";

interface MesaCardsProps {
    numMesa: string;
    total: string;
}

const MesaCard: React.FC<MesaCardsProps> = ({ numMesa, total }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 border border-VermelhoPrincipal shadow-lg  rounded-lg space-y-2 ring-VermelhoPrincipal">
            <h1 className="text-3xl font-bold">Mesa: {numMesa}</h1>
            <p className="text-lg"> Valor Total: R${total}</p>
        </div>
    )
}

export default MesaCard;