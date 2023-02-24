export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[],
    yourImc?: number;
}

export const levels: Level[] = [
    { title: 'Magreza', color: '#4a6f82', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: '#1a9900', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: '#ffaa00', icon: 'down', imc: [25, 29.9] },
    { title: 'Obesidade', color: '#db3324', icon: 'down', imc: [30, 99] }
];

export const calculateImc = (a: number, p: number) => {
    const imc = p / (a * a);

    for (let i in levels) {
        if (parseFloat(imc.toFixed(1)) >= levels[i].imc[0] && parseFloat(imc.toFixed(1)) < levels[i].imc[1]) {
            let levelCopy: Level = { ...levels[i] };
            levelCopy.yourImc = imc;
            return levelCopy;
        }

    }
    return null;
}