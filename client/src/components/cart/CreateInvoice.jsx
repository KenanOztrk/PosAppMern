import { Button, Card, Form, Input, Modal, Select } from "antd"

const CreateInvoice = ({isModalOpen, setIsModalOpen}) => {
  const onFinish = (values) => {
    console.log('valuessss', values)
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
        <Modal 
      title="Fatura Oluştur" 
      open={isModalOpen} 
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      >
      <Form layout={"vertical"} onFinish={onFinish}>
        <Form.Item label='Müşteri Adı'
         name='customerName'
        rules={[{required: true, message:'Müşteri Adı Boş Geçilemez'}]}> 
          <Input placeholder="Müşteri Adı"/>
        </Form.Item>
        <Form.Item label='Tel No' name={"phoneNumber"} rules={[{required: true}]}> 
          <Input placeholder="Tel no yazın" maxLength={11}/>
        </Form.Item>
        <Form.Item label='Ödeme Yöntemi' name={"paymentMode"} rules={[{required: true}]}> 
          <Select placeholder='Ödeme Yöntemi Seçiniz'>
            <Select.Option value='Nakit'>Nakit</Select.Option>
            <Select.Option value='Kredi KArtı'>Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>
          <Card>
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
            <div className="flex justify-end">
            <Button className='mt-4' type='primary' htmlType="submit" ghost size='large' onClick={() => {
              showModal()
            }}>Sipariş Oluştur</Button>
            </div>
          </Card>
      </Form>
      </Modal>
  )
}

export default CreateInvoice