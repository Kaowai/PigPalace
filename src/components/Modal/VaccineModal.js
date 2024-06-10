import React from 'react'
import EventModal from './ModalMain/EventsModal';
import { DateTimeInput2 } from '../Input';

export default function VaccineModal({ name, isvisible, onClose, }) {

    const dataPig = [
        { MaHeo: 'P001', MaGiongHeo: 'Breed01', MaChuong: 'Barn01', GioiTinh: '1', TrongLuong: '12', MaHeoCha: '', MaHeoMe: '', NgaySinh: '2021-01-01', DonGiaNhap: '$100', NgayDenTrangTrai: '12-11-2022', FarmID: 'F001', IsTrongTrangTrai: '1', IsThuanChung: '' },
        { MaHeo: 'P001', MaGiongHeo: 'Breed01', MaChuong: 'Barn01', GioiTinh: '1', TrongLuong: '12', MaHeoCha: '', MaHeoMe: '', NgaySinh: '2021-01-01', DonGiaNhap: '$100', NgayDenTrangTrai: '12-11-2022', FarmID: 'F001', IsTrongTrangTrai: '1', IsThuanChung: '' },
        { MaHeo: 'P001', MaGiongHeo: 'Breed01', MaChuong: 'Barn01', GioiTinh: '1', TrongLuong: '12', MaHeoCha: '', MaHeoMe: '', NgaySinh: '2021-01-01', DonGiaNhap: '$100', NgayDenTrangTrai: '12-11-2022', FarmID: 'F001', IsTrongTrangTrai: '1', IsThuanChung: '' },
        { MaHeo: 'P001', MaGiongHeo: 'Breed01', MaChuong: 'Barn01', GioiTinh: '1', TrongLuong: '12', MaHeoCha: '', MaHeoMe: '', NgaySinh: '2021-01-01', DonGiaNhap: '$100', NgayDenTrangTrai: '12-11-2022', FarmID: 'F001', IsTrongTrangTrai: '0', IsThuanChung: '' },
        { MaHeo: 'P001', MaGiongHeo: 'Breed01', MaChuong: 'Barn01', GioiTinh: '1', TrongLuong: '12', MaHeoCha: '', MaHeoMe: '', NgaySinh: '2021-01-01', DonGiaNhap: '$100', NgayDenTrangTrai: '12-11-2022', FarmID: 'F001', IsTrongTrangTrai: '0', IsThuanChung: '' },
    ]
    const dataFarm = [
        { id: 'INV04052024', employee: 'David Ngo', employeeId: 'E001', type: 'Feed', name: 'Rice bran', quantity: '1,000 (Kg)', cost: '$3,000', invoiceDate: '03-03-2024', purchaseDate: '03-03-2024', status: 'Progress' },
        { id: 'INV04032024', employee: 'David Ngo', employeeId: 'E001', type: 'Feed', name: 'Rice bran', quantity: '1,500 (Kg)', cost: '$3,000', invoiceDate: '03-03-2024', purchaseDate: '03-03-2024', status: 'Paid' },
        { id: 'INV04032024', employee: 'David Ngo', employeeId: 'E001', type: 'Feed', name: 'Rice bran', quantity: '1,200 (Kg)', cost: '$3,000', invoiceDate: '03-03-2024', purchaseDate: '03-03-2024', status: 'Paid' },
        { id: 'INV04032024', employee: 'David Ngo', employeeId: 'E001', type: 'Vaccine', name: 'Porcine Parvovirus', quantity: '200 (Shots)', cost: '$3,000', invoiceDate: '03-03-2024', purchaseDate: '03-03-2024', status: 'Paid' },
        { id: 'INV04032024', employee: 'David Ngo', employeeId: 'E001', type: 'Vaccine', name: 'Porcine Parvovirus', quantity: '200 (Shots)', cost: '$3,000', invoiceDate: '03-03-2024', purchaseDate: '03-03-2024', status: 'Paid' },
      ];
    const handleSubmit = () => {
        onClose();
    }
    return (
        <EventModal name={name} isvisible={isvisible} onClose={onClose}>
            <div className='flex flex-col gap-5 px-4 py-6 justify-center items-center'>
                <div className='w-full'>
                    <div className="text-xs flex-col gap-2 flex w-full relative">
                        <label className="text-secondary60 font-semibold text-xs">Pigs: *</label>
                        <select
                            placeholder={"Select..."}
                            className={`text-xs border bg-white border-secondary30 h-10 rounded-lg text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 w-full`} >
                            {dataPig.map((option, index) => {
                                return (
                                    <option key={index} value={option.MaHeo}>
                                        {option.MaHeo} - {option.MaChuong}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className='w-full'>
                    <div className="text-xs flex-col gap-2 flex w-full relative">
                        <label className="text-secondary60 font-semibold text-xs">Vaccine: *</label>
                        <select
                            placeholder={"Select..."}
                            className={`text-xs border bg-white border-secondary30 h-10 rounded-lg text-textprimary py-2 px-2 outline-none focus:border-blue-500 focus:ring-blue-500 hover:border-blue-500 w-full`} >
                            {dataFarm.map((option, index) => {
                                return option.type === 'Vaccine' && (
                                    <option key={index} value={option.id}>
                                        {option.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className='w-full'>
                    <DateTimeInput2 label={"Vaccine Date: *"} placeholder={"dd-MM-YYYY"}/>
                </div>
                <div className='flex justify-start items-start w-full'>
                    <button className='button-submit' onClick={() => handleSubmit()}>
                        Submit
                    </button>
                </div>
            </div>
        </EventModal>
    )
}
