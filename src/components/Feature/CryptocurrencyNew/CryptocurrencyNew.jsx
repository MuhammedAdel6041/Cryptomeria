import { SmileOutlined } from '@ant-design/icons';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function CryptocurrencyNew() {
    return (
        <div style={{ paddingTop: '100px', textAlign: 'center' }}>
         
            <Result
                icon={<SmileOutlined />}
                title="Sorry, This Cryptocurrency is New"
                subTitle="So There is No Information for Now."
                extra={
                    <Link to="/">
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
                style={{ marginTop: '20px' }}
            />
        </div>
    );
}
