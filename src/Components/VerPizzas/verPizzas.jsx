import React from "react";


import { Container } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
const TablaVer= ()=> {

    
    const columns = [
        {
            name: 'ID',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Product Name',
            selector: 'productName',
            sortable: true,
        },
        {
            name: 'Price',
            selector: 'price',
            sortable: true,
        },
        // Add more columns as needed
    ];

    const fictitiousData = [
        { id: 1, productName: 'Product A', price: '$10.99' },
        { id: 2, productName: 'Product B', price: '$19.99' },
        { id: 3, productName: 'Product C', price: '$15.49' },
        // Add more data as needed
    ];
    return(
        <div className="d-flex justify-content-center align-items-center">
        {/* Create your table here using the Table component from react-bootstrap */}
        <Container className="mt-5 rounded bg-white pt-5 pb-5">
                
                <DataTable
                    className="mt-3"
                    columns={columns}
                   
                    data={fictitiousData}
                    noDataComponent={
                        <div className="p-4">No se encontraron productos</div>
                    }
                   
                   
                    //onSelectedRowsChange={handleRowSelected}
                />
            </Container>
    </div>);

}

export default TablaVer;