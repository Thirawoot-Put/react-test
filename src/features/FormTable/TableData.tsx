import { Button, Checkbox, Pagination, Table, TableColumnsType } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

interface DataType {
  key: React.Key;
  name: string;
  gender: string;
  mobile: string;
  nationality: string;
}

function TableData() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const { data } = useSelector((state) => (state as any).FR);

  const customData: any[] = [];
  for (let i = 0; i < data.length; i++) {
    const copy = {
      ...data[i],
      name: data[i].firstName + " " + data[i].lastName,
    };
    delete copy.firstName;
    delete copy.lastName;
    customData.push(copy);
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Mobile number",
      dataIndex: "mobile",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      dataIndex: "key",
      render: (record) => (
        <Button onClick={() => console.log(record)}>Edit</Button>
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const onSelectAll = (e: CheckboxChangeEvent) => {
    const key = e.target.checked ? customData.map((el) => el.key) : [];
    setSelectedRowKeys(key);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const paginatedData = customData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleChangePage = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
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
          <Button>Delete data</Button>
        </div>
        <Pagination
          style={{ marginTop: "10px", textAlign: "center" }}
          current={currentPage}
          pageSize={pageSize}
          total={data?.length}
          onChange={handleChangePage}
          onShowSizeChange={handleChangePage}
        />
      </div>
      <>
        <Table
          columns={columns}
          dataSource={paginatedData}
          pagination={false}
          rowSelection={rowSelection}
        />
      </>
    </>
  );
}

export default TableData;
