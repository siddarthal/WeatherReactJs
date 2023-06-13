<>
  
<Box sx={{bgcolor:'#90a4ae'}}>
<Box >
<Paper elevation={10}>
<SearchAppBar onchange={onchange} />
</Paper>
</Box>

  <Box sx={{marginTop:3}}>
  <Container  >
    <Temperature />
    <Box sx={{marginTop:3}}>
      <Typography>
        Extended Forecast
      </Typography>
    </Box>
    <Grid container spacing={1} sx={{marginTop:2}}>
    {
      fore.map((cast)=>{
        
        return (<Forecast cast={cast}/>);
      })
    }
    </Grid>
  </Container>
  </Box>

</Box>


</>