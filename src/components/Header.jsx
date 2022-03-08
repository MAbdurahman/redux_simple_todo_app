import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Header() {
   return (
		<Navbar bg='dark' variant='dark'>
			<Navbar.Brand>Simple ToDo App</Navbar.Brand>
		</Navbar>
	);
}
