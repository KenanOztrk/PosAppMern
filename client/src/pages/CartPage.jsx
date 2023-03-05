import { Button, Card, Table } from 'antd'
import { useState } from 'react';
import CreateInvoice from '../components/cart/CreateInvoice';
import Header from '../components/header/Header'

const CartPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <>
      <Header></Header>
      <div className='px-6'>
        <Table dataSource={dataSource} columns={columns} bordered pagination={false}></Table>
        <div className="cart-total flex justify-end">
          <Card className='w-72 mt-4'>
            <div className='flex justify-between'>
              <span>Ara toplam</span>
              <span>500 ₺</span>
            </div>
            <div className='flex justify-between my-2'>
              <span>Kdv toplam %8</span>
              <span className='text-red-700'>50 ₺</span>
            </div>
            <div className='flex justify-between'>
              <b>Toplam</b>
              <b>550 ₺</b>
            </div>
            <Button className='mt-4 w-full' type='primary' ghost size='large' onClick={() => {
              showModal()
            }}>Sipariş Oluştur</Button>
          </Card>
        </div>
      </div>
      <CreateInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  )
}

export default CartPage