import React from 'react'

export default function HOC() {
    const formatCurrency = function(currencySymbol, decimalSeparator) {
        return function( value ) {
            const wholePart = Math.trunc( value / 100 );
            let fractionalPart = value % 100;
            if ( fractionalPart < 10 ) {
                fractionalPart = '0' + fractionalPart;
            }
            return `${currencySymbol}${wholePart}${decimalSeparator}${fractionalPart}`;
        }
    }
    
    const dollarFormat = formatCurrency("$", ".");
    const euroFormat = formatCurrency("€", ".");
    const rialFormat = formatCurrency("ریال", "/");

    

    return (
        <div className='container'>
            <p>Value 1 : {dollarFormat(5225)}</p>
            <p>Value 2 : {euroFormat(5225)}</p>
            <p>Value 3 : {rialFormat(5225)}</p>
        </div>
    )
}
