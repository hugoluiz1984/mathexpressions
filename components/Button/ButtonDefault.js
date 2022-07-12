import React,{useState, useEffect} from 'react';

const ButtonDefault = (props) => {
    const {label, onPress , color, style} = props;
    const [cores, setCores] = useState(null);
    const [estilo, setEstilo] = useState(null);
    const [estiloFont, setEstiloFont] = useState(null);

    useEffect(() => {
        switch (color) {
            case 'green':
                setCores('green');
                break;
            case 'yellow':
                setCores('yellow');
                break;
            case 'red':
                setCores('red');
                break;
            case 'transparent':
                setCores('transparent');
                break;
            default:
                setCores('gray');
                break;
        }
        style==='bnt'?setEstilo('bnt'):setEstilo('bnt_cor');
        style==='bnt'?setEstiloFont('btnFont'):setEstiloFont('keyLetter');
    }, []);

    return (
        <div
            className={['btn btn-outline-primary mt-2 me-2',color]}
            onClick={onPress}>
            <span className={estiloFont}>{label}</span>
        </div>
    );
}


export default ButtonDefault;
