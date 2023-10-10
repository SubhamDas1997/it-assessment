import { React, useEffect, useState } from 'react'
import { getAllDocuments, getDocumentsByCountry } from '../../services/fetchDocuments'
import PageSelector from '../PageSelector/Selector'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const TableContents = ({ searchValue }) => {
    const keyHeaderMapping = {
        "documentName": "Document Name",
        "legalEntityName": "Legal Entity Name",
        "country": "Country",
        "internalDueDate": "Internal Due Date",
        "statuatoryDueDate": "Statuatory Due Date",
        "documentType": "Document Type",
        "userAccess": "User Access",
        "status": "Status"
    };

    const [searchedRowData, setSearchedRowData] = useState([]);
    const [totalPages, setTotalPages] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    
    const convertDateToReadableFormat = (date) => date.split("T")[0].split("-").join("/");

    useEffect(() => {
        const fetchDataInvoker = async () => {
            // Fetching from JSON server as JSON BLOB 
            // doesn't provide the required API for search
            // const response = await fetch('https://jsonblob.com/api/1160941267625828352');
            // const data = await response.json();
            
            let result;
            
            if(searchValue === "") {
                result = await getAllDocuments(currentPage);
            }
            else {
                result = await getDocumentsByCountry(searchValue, currentPage);
            }
            
            for(let i = 0; i < result.data.length; i++) {
                result.data[i].internalDueDate = convertDateToReadableFormat(result.data[i].internalDueDate);
                result.data[i].statuatoryDueDate = convertDateToReadableFormat(result.data[i].statuatoryDueDate);
            }

            setSearchedRowData(result.data);
            setTotalPages(parseInt(result.totalPages));
        }
        fetchDataInvoker();
    }, [searchValue, currentPage])

    useEffect(() => {
        setCurrentPage(1);
    }, [searchValue]);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            {Object.keys(keyHeaderMapping).map((header) => <TableCell key={keyHeaderMapping[header]} style={{ fontWeight: "bold" }}> {keyHeaderMapping[header]} </TableCell>
                            )}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            searchedRowData.map((row) => (
                                <TableRow
                                    key={row.documentName}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" style={{ color: "blue", maxWidth: "1rem" }}>{row.documentName}</TableCell>
                                    <TableCell style={{ color: "blue", maxWidth: "1rem" }}>{row.legalEntityName}</TableCell>
                                    <TableCell style={{ maxWidth: "1rem" }}>{row.country}</TableCell>
                                    <TableCell style={{ maxWidth: "1rem" }}>{row.internalDueDate}</TableCell>
                                    <TableCell style={{ maxWidth: "1rem" }}>{row.statuatoryDueDate}</TableCell>
                                    <TableCell style={{ maxWidth: "1rem" }}>{row.documentType}</TableCell>
                                    <TableCell style={{ maxWidth: "1rem" }}>{row.userAccess}</TableCell>
                                    <TableCell style={{ maxWidth: "1rem" }}>{row.status}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

            {
                searchedRowData.length === 0 && (
                    <p style={{paddingLeft: "18px", fontWeight: "500", color: "red"}}>No documents found from searched country!</p>
                )
            }

            {
                searchedRowData.length > 0 && (
                    <PageSelector key={searchValue} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
                )
            }
        </div>
    )
}

export default TableContents