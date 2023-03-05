import { Button, Card, Table } from 'antd'
import { useState } from 'react';
import Header from '../components/header/Header'
import PrintInvoice from '../components/invoices/PrintInvoice';

const InvoicePage = () => {

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
            <h1 className='text-4xl font-bold text-center mb-4'>FATURALAR</h1>
          <Table dataSource={dataSource} columns={columns} bordered pagination={false}></Table>
          <div className="cart-total flex justify-end">
            <Card className='w-72 mt-4'>
             
              <Button className='mt-4 w-full' type='primary' ghost size='large' onClick={() => {
                showModal()
              }}>Yazdır</Button>
            </Card>
          </div>
        </div>
      <PrintInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      </>
    )
  }
  
  export default InvoicePage