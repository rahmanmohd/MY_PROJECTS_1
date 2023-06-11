<Router>
 < Navbar bg="dark" variant="dark">
 <Navbar.Brand href="/" style={{ marginLeft: '30px' }}><i className
="fa fa-globe" style={{ fontSize: '36px' }}></i></Navbar.Brand>
 <Nav className="mr-auto">
 <Nav.Link href="/" style={{ color: 'white', marginLeft: '30px' }
}>Home</Nav.Link>
 <Nav.Link href="/Components/Population" style={{ color: 'white',
marginLeft: '30px' }}>Population</Nav.Link>
 <Nav.Link href="/Components/TableView" style={{ color: 'white',
marginLeft: '30px' }}>Data Table</Nav.Link>
 <Nav.Link href="/Components/Statistics" style={{ color: 'white',
marginLeft: '30px' }}>Statistics</Nav.Link>
 <NavDropdown title={<span style={{ color: 'white', marginLeft: '30px' }}>Epass</span>} id="navdropdown" style={{ color: 'white' }} >
 <NavDropdown.Item href="/Components/E_pass" >Apply EPass</NavDropdown.Item>
 <NavDropdown.Item href="/Components/Tracking">Track EPass</NavDropdown.Item>
 </NavDropdown> <Nav.Link href="/Components/India" style={{ color: 'white', marginLeft: '30px' }}>India</Nav.Link>
 {/* <Nav.Link href="/Components/testing">Send Message</Nav.Link>
 */}

 </Nav>
 </Navbar>
 <Switch>
 <Route path="/Components/Population">
 <Population ></Population>
 </Route>
 <Route path="/Components/E_pass">
 <E_pass></E_pass>
 </Route>
 <Route path="/Components/Tracking">
 <Tracking></Tracking>
 </Route>
 <Route path="/Components/TableView">
 <TableView></TableView>
 </Route>
 <Route path="/Components/Statistics">
 {/* <WorldMap></WorldMap> */}
 <WorldMap></WorldMap>
 </Route>
 <Route path="/Components/India">
 <India></India>
 </Route>
 {/* <Route path="/Components/testing">
 <Statistics></Statistics>
 </Route> */}
 <Route path="/">
 <Home></Home>
 </Route>
 </Switch>
 </Router>
