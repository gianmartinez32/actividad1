import { Card } from 'antd'
const { Meta } = Card;
const CardFruit = ({title,description,counter, img}:any) => {

    return (
        <Card
        hoverable
        bordered
            style={{
                width: 300,
            }}
            cover={
                <img
                    style={{
                        width: '100%',
                        objectFit: 'contain',
                        maxHeight:'150px'
                    }}
                    alt="example"
                    src={img}
                />

            }
        >
            <Meta
                title={`${title} - ${counter}`}
                description={description}
            />
        </Card>
    )
}

export default CardFruit