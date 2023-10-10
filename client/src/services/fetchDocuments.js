import getTotalPages from "../utils/getTotalPages";

const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:4001/';

const getAllDocuments = async (pageNumber, resultLimit = 5) => {
    const response = await fetch(`${baseURL}documents?_page=${pageNumber}&_limit=${resultLimit}`);
    const headerLinkString = response.headers.get("Link");
    
    const data = await response.json();

    return {
        data: data,
        totalPages: getTotalPages(headerLinkString)
    }
}

const getDocumentsByCountry = async (country, pageNumber, resultLimit = 5) => {
    const response = await fetch(`${baseURL}documents?_page=${pageNumber}&_limit=${resultLimit}&country_like=${country}`)
    const headerLinkString = response.headers.get("Link");

    const data = await response.json();

    return {
        data: data,
        totalPages: getTotalPages(headerLinkString)
    }
}

export { getAllDocuments, getDocumentsByCountry };