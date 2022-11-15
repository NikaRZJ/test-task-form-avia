import { FC } from 'react';
import Info from '../components/Info/Info';

export interface InfoPageProps {
    data: { fromCity: string; toCity: string; thereDate: string; backDate: string; };
}

const InfoPage: FC<InfoPageProps> = (props: InfoPageProps) => {

    if (props.data.backDate) {

    }
    return (
        <div>
            <Info data={props.data} />
        </div>

    )
}

export default InfoPage;