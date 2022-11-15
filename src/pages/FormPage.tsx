import { FC } from 'react';
import Form from '../components/Form/Form';
import { DataProps } from '../App'

export interface FormPageProps {
    getData: ({ fromCity, toCity, thereDate, backDate }: DataProps) => void
}

const FormPage: FC<FormPageProps> = ({ getData }: FormPageProps) => {
    return (
        <Form getData={getData} />
    )
}

export default FormPage;