const getTotalPages = (string) => {
    let result = {};

    if(string) {

        let commaSplit = string.split(',');
        
        for(let i = 0; i < commaSplit.length; i++) {
            let linkSplit = commaSplit[i].split(';')[0];
            let relSplit = commaSplit[i].split(';')[1];
        
            let key = relSplit.split('"')[1];
            let currentPage = linkSplit.split('_')[1].split('=')[1].split('&')[0];
            let limitPerPage = linkSplit.split('_')[2].split('=')[1].split('>')[0];
            let url = linkSplit.split('<')[1].split('>')[0];
            
            result[key] = {
                page: currentPage,
                per_page: limitPerPage,
                rel: key,
                url: url
            }
        }
    
        return result.last.page;
    }

    return 1;
}

export default getTotalPages