import { Form, Input, Modal, Table } from 'antd'
import React from 'react'

const Edit = ({isEditModalOpen, setIsEditModalOpen, categories}) => {

    const columns =[

        {
            title: "Category Title",
            dataIndex: "title",
            render: () => {
                return (
                    <Form.Item>
                        <Input></Input>
                    </Form.Item>
                )
            }
        }
    ]
  return (
    <>
    <Modal 
    open={isEditModalOpen} 
    title="Kategori Islemleri"
    footer={false}
    onCancel={() => setIsEditModalOpen(false)}
    >
        <Form>
            <Table 
            bordered
            dataSource={categories}
            columns={columns}
            />
        </Form>
    </Modal>
    </>
  )
}

export default Edit