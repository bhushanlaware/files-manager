import { Box, Button, Grid, Paper, TextField } from '@material-ui/core';
import { DirectionsCar, Search } from '@material-ui/icons';
import { KeyboardDatePicker } from '@material-ui/pickers';
import React, { Component } from 'react';
import GMapComponent from '../Components/GMapComponent';
import PageHeader from '../Components/PageHeader';
import ReactSelect from '../Components/ReactSelect';
import { getAllVehicles, getVehicleTrackRecord } from '../store/actions/vehiclesActions';
import { connect } from 'react-redux';
class VehicleActivity extends Component {
	state = {
		startDate: null,
		license: null,
		endDate: null,
	}
	componentDidMount = () => {
		this.props.getAllVehicles().then();
	}
	handleSearch = () => {
		const { startDate, endDate, license } = this.state;
		startDate
			&& endDate
			&& license
			&& this.props.getTrackRecord(this.state.license.id, startDate, endDate);
	}
	render() {
		return <>
			<PageHeader
				title={"Vehicle Activity"}
				icon={<DirectionsCar></DirectionsCar>}
				links={this.props.menu && this.props.menu.filter(x => x.url !== '/place-interactions')}
			></PageHeader>
			<Paper elevation={0}>
				<Box p={2}>
					<Grid container>
						<Grid item xs={12}>
							<Box p={1}>
								<Grid container spacing={2}>
									<Grid item xs={3}>
										{/* <TextField variant='outlined' size='small' label='Licence number' type='number'></TextField> */}
										<ReactSelect
											placeholder="Select License."
											isMulti={false}
											options={this.props.vehicles.map(x => ({ ...x, value: x.id, label: x.license }))}
											value={this.state.license}
											onChange={v => this.setState({ license: v })}
										/>
									</Grid>
									<Grid item>
										<KeyboardDatePicker
											showTodayButton
											format="dd, MMM, yyyy"
											label="Start Date"
											color='primary'
											size='small'
											value={this.state.startDate}
											onChange={(v) => this.setState({ startDate: v })}
											inputVariant='outlined'
										/>
									</Grid>
									<Grid item>
										<KeyboardDatePicker
											showTodayButton
											format="dd, MMM, yyyy"
											label="End Date"
											color='primary'
											size='small'
											value={this.state.endDate}
											onChange={(v) => this.setState({ endDate: v })}
											inputVariant='outlined'
										/>
									</Grid>
									<Grid item>
										<Button
											variant='contained'
											color='primary'
											startIcon={<Search></Search>}
											onClick={this.handleSearch}
										>
											Search
									</Button>
									</Grid>
								</Grid>
							</Box>
						</Grid>
						<Grid item xs={12}>
							<GMapComponent position={{ lat: -14.397, lng: 150.644 }} polyline={this.props.vehicleTrack}></GMapComponent>
						</Grid>
					</Grid>
				</Box>
			</Paper></>
	}
}
const mapStateToProps = (state) => ({ 
	vehicles: state.VehicleReducer.vehicles || [],
	vehicleTrack: state.VehicleReducer.vehicleTrack || [],
 });
const mapDispatchToProps = (dispatch) => ({
	getAllVehicles: () => dispatch(getAllVehicles()),
	getTrackRecord: (id, startDate, endDate) => dispatch(getVehicleTrackRecord(id, startDate, endDate)),
});
export default connect(mapStateToProps, mapDispatchToProps)(VehicleActivity);