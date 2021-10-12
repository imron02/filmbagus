import { Button } from 'component/button';
import { Form } from 'component/form';
import HeaderComponent from 'component/header/header_component';
import LayoutComponent from 'component/layout/layout_component';
import TextComponent from 'component/text_component';
import React, { memo, useContext } from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components';
import { ColorEnum } from 'utils/colors';
import { SizeEnum } from 'utils/size';
import { useFormik } from 'formik';
import { LoginSchema } from 'utils/validator_schema';
import AuthContext from 'context/auth_context';

export interface LoginInterface {
  username: string;
  password: string;
}

const ImageStyled = styled(Image)`
  width: 138px;
  height: 37px;
  resize-mode: cover;
  margin-top: 40px;
  margin-bottom: 60px;
`;
const SpacerStyled = styled(View)`
  height: ${(props: { size?: SizeEnum }) => props.size || SizeEnum['10x']};
`;

const LoginInitialValue: LoginInterface = { username: '', password: '' };

const FormLogin = memo(() => {
  const { signIn } = useContext(AuthContext);

  const onSubmit = () => {
    signIn(values);
  };

  const { values, handleChange, touched, errors, handleBlur, handleSubmit, isValid, dirty } =
    useFormik({
      initialValues: LoginInitialValue,
      onSubmit,
      validationSchema: LoginSchema
    });

  return (
    <>
      <Form.Input
        placeholder="Username"
        value={values.username}
        handleChange={handleChange('username')}
        handleBlur={handleBlur('username')}
        errorMessage={(touched.username && errors.username) || ''}
      />
      <Form.Input
        placeholder="Password"
        value={values.password}
        handleChange={handleChange('password')}
        handleBlur={handleBlur('password')}
        errorMessage={(touched.password && errors.password) || ''}
        secureTextEntry
      />
      <SpacerStyled size={SizeEnum['32x']} />
      <Button.Normal
        label="Sign In"
        onPress={handleSubmit}
        accessibilityLabel="btnSignIn"
        disabled={!isValid || !dirty}
      />
    </>
  );
});

export default function LoginScreen() {
  return (
    <LayoutComponent isWithoutScroll>
      <ImageStyled source={require('../../assets/images/logos_netflix.png')} />
      <HeaderComponent label="Sign In" />
      <SpacerStyled size={SizeEnum['32x']} />
      <FormLogin />
      <SpacerStyled size={SizeEnum['32x']} />
      <View style={{ flexDirection: 'row' }}>
        <TextComponent label="New to Netflix?" color={ColorEnum.grey200} variant="large" />
        <TextComponent label={' '} />
        <Button.Link onPress={() => null}>
          <TextComponent label="Sign up now." color={ColorEnum.white} variant="large" />
        </Button.Link>
      </View>
    </LayoutComponent>
  );
}
