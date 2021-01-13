import React from 'react'
import {render, fireEvent, getAllByLabelText} from '@testing-library/react';

import TechList from '~/components/TechList';

describe('TechList component', () =>{
    it('deve adicionar dados na lista', () =>{
        const {getByText, getByTestId, getByLabelText, debug} = render(<TechList />);
        debug();
        fireEvent.change(getByLabelText('Tech'), {target: {value: null}});
        fireEvent.submit(getByTestId('tech-form'));
       
        

        expect(getByTestId('tech-list')).toBeUndefined()    
       
        debug();
    })       
})