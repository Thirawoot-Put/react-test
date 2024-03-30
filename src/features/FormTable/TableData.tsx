import {
  Button,
  Checkbox,
  Modal,
  Pagination,
  Table,
  TableColumnsType,
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import EditForm from "./EditForm";
import { deleteData, editData } from "../../redux/store/formSlice";

interface DataType {
  key: React.Key;
  firstName: string;
  gender: string;
  mobile: string;
  nationality: string;
}

function TableData() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [edit, setEdit] = useState(null);

  const { data } = useSelector((state) => (state as any).FR);

  const dispatch = useDispatch();

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      render: (record) => (
        <>
          {record?.firstName} {record?.lastName}
        </>
      ),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: "Mobile number",
      dataIndex: "mobile",
      sorter: (a, b) => a.mobile.localeCompare(b.mobile),
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      sorter: (a, b) => a.nationality.localeCompare(b.nationality),
    },
    {
      title: "Edit",
      render: (record) => (
        <EditOutlined onClick={() => handleClickEdit(record)} />
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const onSelectAll = (e: CheckboxChangeEvent) => {
    const key = e.target.checked ? data.map((el: any) => el.key) : [];
    setSelectedRowKeys(key);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleChangePage = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleClickEdit = (record: any) => {
    setIsEditing(true);
    setEdit({ ...record });
  };

  const handleChangeEditInput = (e: React.FormEvent<HTMLInputElement>) => {
    setEdit((prv: any) => ({
      ...prv,
      [e.currentTarget.name]: e.currentTarget.value,
    }));
  };

  const handleConfirmEdit = () => {
    dispatch(editData(edit));
    setIsEditing(false);
  };

  const handleDeleteData = () => {
    for (let i = 0; i < selectedRowKeys.length; i++) {
      console.log(selectedRowKeys[i]);
      dispatch(deleteData(selectedRowKeys[i]));
    }
    setSelectedRowKeys([]);
  };

  return (
    <>
      <div
        style={{
          paddingBottom: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Checkbox onChange={onSelectAll}>Select all</Checkbox>
          <Button onClick={handleDeleteData}>Delete data</Button>
        </div>
        <Pagination
          style={{ marginTop: "10px", textAlign: "center" }}
          current={currentPage}
          pageSize={pageSize}
          total={data?.length}
          onChange={handleChangePage}
          // onShowSizeChange={handleChangePage}
        />
      </div>
      <>
        <Table
          columns={columns}
          dataSource={paginatedData}
          pagination={false}
          rowSelection={rowSelection}
        />
        <Modal
          title="Edit"
          open={isEditing}
          onCancel={() => setIsEditing(false)}
          okText="Save"
          onOk={handleConfirmEdit}
          style={{ width: "900px" }}
        >
          <EditForm edit={edit} onChange={handleChangeEditInput} />
        </Modal>
      </>
    </>
  );
}

export default TableData;
