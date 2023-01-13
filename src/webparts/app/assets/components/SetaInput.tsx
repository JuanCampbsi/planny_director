import * as React from 'react';


const SetaInput = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg" 	{...props}>
            <path id='Seta' className='SetaName' d="M17.4998 1.5L9.49946 8.5L1.49975 1.5" stroke={props.stroke} stroke-width="2" />
        </svg>

    );
}

export default SetaInput;