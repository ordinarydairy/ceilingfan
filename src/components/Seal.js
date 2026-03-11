const ACCESSORY_STYLES = {
    none: null,
    hat: {src: '/seal_hat.png', style: {position:'absolute', top: '0px', left: '0%', width:'100px'}},
    glasses: {src: '/seal_glasses.png', style: {position:'absolute', top: '0px', left: '0%', width:'100px'}},
    cone: {src: '/seal_cone.png', style: {position:'absolute', top: '0px', left: '0%', width:'100px'}},
    stache: {src: '/seal_stache.png', style: {position:'absolute', top: '0px', left: '0%', width:'100px'}}
}

export default function Seal({accessory, width = 100}){
    const acc = ACCESSORY_STYLES[accessory]

    return (
        <div style={{ position: 'relative', width: width, display: 'inline-block'}}>
        <img src="/seal.png" width={width}/>
        {acc && <img src={acc.src} style= {{...acc.style}} />}
        </div>
            


    )
}