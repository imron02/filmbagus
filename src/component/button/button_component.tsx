import React from 'react';
import ButtonLinkComponent from './button_link_component';
import ButtonNormalComponent from './button_normal_component';

const Button = (props: { children: React.ReactNode }) => props.children;

Button.Normal = ButtonNormalComponent;
Button.Link = ButtonLinkComponent;

export default Button;
