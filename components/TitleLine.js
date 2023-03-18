import React from 'react';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	label: {
		overflow: 'hidden',
		margin: '25px 0',
		position: 'relative',
		width: '100%',
		textAlign: 'center',
	},
	labelText: {
		position: 'relative',
		color: 'rgba(0, 0, 0, 0.6)',
		display: 'inline-flex',
		padding: '0 15px',
		textTransform: 'uppercase',
		zIndex: 2
	},
	labelLine: {
		display: 'inline-flex',
		position: 'absolute',
		width: '100%',
		height: '1px',
		top: '50%',
		left: 0,
		transform: 'translateY(-50%)',
		background: '#eaeaf0'
    },
}));

const TitleLine = ({children, blueBg}) => {
	const classes = useStyles();

	return(
		<div className={classes.label}>
			<span
				style={{backgroundColor: blueBg ? "#f2fbfe" : "#fff"}}
				className={classes.labelText}
			>
				{children}
			</span>
			<span className={classes.labelLine}/>
		</div>
	)
};

export default TitleLine;