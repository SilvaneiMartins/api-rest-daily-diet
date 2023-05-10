import { expect, test } from 'vitest';

test('O usuário consegue criar uma nova transação', () => {
    const transaction = {
        title: "Salário",
        value: 5000,
        type: "income",
        category: "Salário",
    };

    expect(transaction).toEqual({
        title: "Salário",
        value: 5000,
        type: "income",
        category: "Salário",
    })
});
