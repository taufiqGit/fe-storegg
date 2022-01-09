import NumberFormat from "react-number-format"

interface RowProps {
    label: string
    value: string | number
    className?: string
}

export default function Row(props: RowProps) {
    const { label, value, className } = props

    return(
        <p className="text-lg color-palette-1 mb-20">
            {label}
            <span className={`purchase-details  ${className}`}>
                {
                    typeof value === 'number' ? (
                        <NumberFormat
                            prefix='Rp. ' 
                            displayType='text' 
                            thousandSeparator='.' 
                            decimalSeparator=',' 
                            value={value}
                        />
                    ) : (
                       value
                    )
                }
                
            </span>
        </p>
    )
}