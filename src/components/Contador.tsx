import { Button, Card } from 'antd'
import React from 'react'

const Contador = ({ increase, decrease, reset }: any) => {
    return (
        <Card
            bordered
            style={{
                justifySelf: 'center', alignSelf: 'center', width: '100%', justifyContent: 'center',
            }}
            bodyStyle={{ display: 'flex', justifyContent: 'center', gap: 10 }}
        >
            <Button onClick={decrease}>Disminuir</Button>
            <Button onClick={reset}>Resetear</Button>
            <Button onClick={increase}>Incrementar</Button>

        </Card>
    )
}

export default Contador