import React from "react";
import * as S from "./Questions.style";
import { data } from "./const/data";
import Label from "../../../../../components/UI/Label/Label";

const Questions = () => {
    return (
        <S.Wrapper>
            <S.Container>
              {
                data.map((item) => {
                  return <S.WrapperBorder key={item.question}>
                  <S.Border >
                    <Label
                      fontFamily='Montserrat'
                      fontWeight='600'
                      fontSize='0.8rem'
                      lineHeight='1.5rem'
                      textAlign='center'
                      color='white'
                    >
                      {item.question}
                    </Label>
                    <S.InputRadioContainer>
                      <S.InputRadioSingleItem>
                        <input type="radio" />
                        <label htmlFor="">
                          <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1.5rem'
                            textAlign='center'
                            color='white'
                          >1</Label>
                        </label>
                      </S.InputRadioSingleItem>
                      <S.InputRadioSingleItem>
                        <input type="radio" />
                        <label htmlFor="">
                          <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1.5rem'
                            textAlign='center'
                            color='white'
                          >2</Label>
                        </label>
                      </S.InputRadioSingleItem>
                      <S.InputRadioSingleItem>
                        <input type="radio" />
                        <label htmlFor="">
                          <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1.5rem'
                            textAlign='center'
                            color='white'
                          >3</Label>
                        </label>
                      </S.InputRadioSingleItem>
                      <S.InputRadioSingleItem>
                        <input type="radio" />
                        <label htmlFor="">
                          <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1.5rem'
                            textAlign='center'
                            color='white'
                          >4</Label>
                        </label>
                      </S.InputRadioSingleItem>
                      <S.InputRadioSingleItem>
                        <input type="radio" />
                        <label htmlFor="">
                          <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1.5rem'
                            textAlign='center'
                            color='white'
                          >5</Label>
                        </label>
                      </S.InputRadioSingleItem>
                      <S.InputRadioSingleItem>
                        <input type="radio" />
                        <label htmlFor="">
                          <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1.5rem'
                            textAlign='center'
                            color='white'
                          >6</Label>
                        </label>
                      </S.InputRadioSingleItem>
                      <S.InputRadioSingleItem>
                        <input type="radio" />
                        <label htmlFor="">
                          <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1.5rem'
                            textAlign='center'
                            color='white'
                          >7</Label>
                        </label>
                      </S.InputRadioSingleItem>
                      <S.InputRadioSingleItem>
                        <input type="radio" />
                        <label htmlFor="">
                          <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1.5rem'
                            textAlign='center'
                            color='white'
                          >8</Label>
                        </label>
                      </S.InputRadioSingleItem>
                      <S.InputRadioSingleItem>
                        <input type="radio" />
                        <label htmlFor="">
                          <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1.5rem'
                            textAlign='center'
                            color='white'
                          >9</Label>
                        </label>
                      </S.InputRadioSingleItem>
                      <S.InputRadioSingleItem>
                        <input type="radio" />
                        <label htmlFor="">
                          <Label
                            fontFamily='Montserrat'
                            fontWeight='600'
                            fontSize='0.8rem'
                            lineHeight='1.5rem'
                            textAlign='center'
                            color='white'
                          >10</Label>
                        </label>
                      </S.InputRadioSingleItem>
                    </S.InputRadioContainer>
                  </S.Border>
                  </S.WrapperBorder>
                })
              }
            </S.Container>
        </S.Wrapper>
    );
};

export default Questions;
