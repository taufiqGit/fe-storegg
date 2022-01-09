import Image from "next/image"
import NumberFormat from "react-number-format"
import cx from 'classnames'

interface TableRowProps {
    title: string;
    category: string;
    item: string;
    price: number;
    status: string;
    image: string;
}

export default function TableRow(props: TableRowProps) {
    const { title, category, item, price, status, image } = props
    const classStatus = cx({
        'float-start icon-status': true,
        'failed': status === 'failed',
        'success': status === 'success',
        'pending': status === 'pending'
    })
    return(
    <tr className="align-middle">
        <th scope="row">
            <img className="float-start me-3 mb-lg-0 mb-3" src={`/img/${image}.png`}
                width={80} height={60} alt="it's image"/>
            <div className="game-title-header">
                <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
                <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
            </div>
        </th>
        <td>
            <p className="fw-medium color-palette-1 m-0">{item}</p>
        </td>
        <td>
            <p className="fw-medium text-start color-palette-1 m-0">
                <NumberFormat 
                    prefix='Rp. ' 
                    displayType='text' 
                    thousandSeparator='.' 
                    decimalSeparator=',' 
                    value={price}
                />
            </p>
        </td>
        <td>
            <div>
                <span className={classStatus}></span>
                <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                    {status}</p>
            </div>
        </td>
    </tr>
    )
}