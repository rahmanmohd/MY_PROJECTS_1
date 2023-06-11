tableDisplay = () => {
    return this.state.worldcorono
    .map(countryName => {
    return (
    <tr key={countryName.country} style={{}}>
    <td style={{textAlign:'center',backgroundColor:'white',color:'black'}}>
    {countryName.country}
    </td>
    <td style={{textAlign:'center',backgroundColor:''}}>
    {/* #ffffb3 */}
    {(this.state.NewApiMap.get(countryName.country))}
    </td>
    <td style={{textAlign:'center',backgroundColor:''}}>
    {((countryName.cases * 100) / (this.state.NewApiMap.get(countryName.country))).toFixed(2)}%
    </td>
    </tr>
    )
    })
    }
    <Table stripped hover bordered >
    <thead style={{}}>
    <tr>
    <th style={{ fontSize: '20px',textAlign:'center',backgroundColor:'#5b9aa0',color:'white'}} >
    Country
    </th>
   <th style={{ fontSize: '20px',textAlign:'center',backgroundColor:'#96ceb4',color:'white' }}>
    Population
    </th>
   <th style={{ fontSize: '20px',textAlign:'center',backgroundColor:'#5b9aa0',color:'white' }}>
    Percentage Affected
    </th>
    </tr>
    </thead>
   <tbody>
    {this.tableDisplay()}
    </tbody>
    </Table>
   