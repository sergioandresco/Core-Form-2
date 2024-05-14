import { useQuery } from 'react-query';
import { GetData } from '../../../services/apiDataListCore';
import { Loader } from '../../loader';

import '../data-list.css';

import DownloadIcon from '../../../assets/svg/download-icon.svg';

function DataList() {

    const { data, isLoading, error } = useQuery('dataList', () => GetData({}));

    if (isLoading) return <Loader />;
    if (error) return <div>Error: {error.message}</div>;

    if (data && Array.isArray(data.Data)) {
        return (
            <div className="container-list-component">
                <div className="container-list-component--c-list">
                    <div className="c-list--heading">
                        <span>Data List Users Core Medellín 2024</span>
                    </div>
                    
                    <table className='c-list--table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Franchise</th>
                                <th>Digits</th>
                                <th>Type Document</th>
                                <th>Number Document</th>
                                <th>Url Document</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.Data.map((item) => (
                                <tr key={item.name}>
                                    <td>{item.name}</td>
                                    <td>{item.franchise}</td>
                                    <td>{item.digits}</td>
                                    <td>{item.typeDocument}</td>
                                    <td>{item.documentNumber}</td>
                                    <td>
                                        <a href={item.storedFileName} target='_blank'>
                                            <img className='table-iconDownload' src={DownloadIcon} />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    } else {
        return <div>No se encontraron datos.</div>;
    }
}

export { DataList };