import Link from 'next/link'
import cx from 'classnames'
import NumberFormat from 'react-number-format'

interface TableRowProps {
    id: string;
    image: string
    title: string
    category: string
    item: string
    price: number
    status: string
}

export default function TableRow(props: TableRowProps) {
    const { image, title, category, item, price, status, id } = props

    const classStatus = cx({
        'float-start icon-status': true,
        'failed': status === 'failed',
        'success': status === 'success',
        'pending': status === 'pending'
    })

    return(
    <tr data-category="pending" className="align-middle">
        <th scope="row">
            <img className="float-start me-3 mb-lg-0 mb-3" src={image}
                width="80" height="60" alt="s"/>
            <div className="game-title-header">
                <p className="game-title fw-medium text-start color-palett}e-1 m-0">{title}</p>
                <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
            </div>
        </th>
        <td>
            <p className="fw-medium color-palette-1 m-0">{item}</p>
        </td>
        <td>
            <p className="fw-medium color-palette-1 m-0">
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
                <p className="fw-medium text-start color-palette-1 m-0 position-relative">{status}</p>
            </div>
        </td>
        <td>
            <Link href={`/member/transactions/${id}`}>
            <a className="btn btn-status rounded-pill text-sm">Details</a>
            </Link>
        </td>
    </tr>
    )
}