// utils.test.jsx
import { describe, it, expect } from 'vitest';
import buscarEnLista from './utils';

describe('buscarEnLista', () => {
  
  it('debe devolver elementos que coincidan exactamente con el término de búsqueda', () => {
    const lista = ['Joaquin', 'Luisa', 'Ana'];
    const resultado = buscarEnLista(lista, 'Ana');
    expect(resultado).toEqual(['Ana']);
  });

  it('debe devolver elementos que contengan el término de búsqueda como parte de la cadena', () => {
    const lista = ['Joaquin', 'Luisa', 'Ana'];
    const resultado = buscarEnLista(lista, 'Dani');
    expect(resultado).toEqual(['Joaquin', 'Luisa']);
  });

  it('debe ignorar mayúsculas y minúsculas en la búsqueda', () => {
    const lista = ['joaquin', 'ana', 'luisa'];
    const resultado = buscarEnLista(lista, 'JoAqUiN');
    expect(resultado).toEqual(['joaquin']);
  });

  it('debe devolver todos los elementos si el término de búsqueda está vacío', () => {
    const lista = ['Joaquin', 'Ana', 'Luisa'];
    const resultado = buscarEnLista(lista, '');
    expect(resultado).toEqual(lista);
  });

  it('debe devolver una lista vacía si la lista de entrada está vacía', () => {
    const lista = [];
    const resultado = buscarEnLista(lista, 'CualquierTermino');
    expect(resultado).toEqual([]);
  });

});
