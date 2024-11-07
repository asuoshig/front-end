import React from 'react';
import MesaCard from '../components/MesaCards';
import CampoPesquisa from '../components/CampoPesquisa';
import Header from '../components/header';

const mesa = [
    { numMesa: '1', total: 'R$ 100.00' },
    { numMesa: '2', total: 'R$ 200.00' },
    { numMesa: '3', total: 'R$ 300.00' },
    { numMesa: '4', total: 'R$ 400.00' },
    { numMesa: '5', total: 'R$ 500.00' },
    { numMesa: '6', total: 'R$ 600.00' },
    { numMesa: '7', total: 'R$ 700.00' }, 
    { numMesa: '8', total: 'R$ 800.00' },
    { numMesa: '9', total: 'R$ 900.00' },
    { numMesa: '10', total: 'R$ 1000.00' },
];


const Mesas: React.FC = () => {
    return (
        
        <div className="p-0">
            <Header />
            <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold p-4">PEDIDOS </h2> 
            <CampoPesquisa />
            <button className="bg-VermelhoPrincipal text-white px-4 py-2 rounded-lg mr-5">PARA AÑADIR</button>
            </div>
        <div className='mb-12 flex justify-center items-center h-8 bg-VermelhoPrincipal text-white font-bold text-2xl'>
            <h1>TABLA DE PEDIDOS</h1>
        </div>
            
            <div className=" ml-4 mr-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">{mesa.map((mesa) => <MesaCard numMesa={mesa.numMesa} total={mesa.total} />)}</div>
        </div>
    )
}

export default Mesas;