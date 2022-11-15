import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import FormPage from './pages/FormPage';
import InfoPage from './pages/InfoPage';

export interface DataProps {
    fromCity: string,
    toCity: string,
    thereDate: string,
    backDate: string
}

function App() {
    const [fromCity, setFromCity] = useState<string>('');
    const [toCity, setToCity] = useState<string>('');
    const [thereDate, setThereDate] = useState<string>('');
    const [backDate, setBackDate] = useState<string>('');

    const getData = ({ fromCity, toCity, thereDate, backDate }: DataProps) => {
        setFromCity(fromCity);
        setToCity(toCity);
        setThereDate(thereDate);
        setBackDate(backDate);
    }

    return (
        <BrowserRouter>
            <div className='container'>
                <Routes>
                    <Route path={'/avia'} element={<FormPage getData={getData} />} />
                    <Route path={'/avia/info'} element={<InfoPage data={{ fromCity: fromCity, toCity: toCity, thereDate: thereDate, backDate: backDate }} />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
