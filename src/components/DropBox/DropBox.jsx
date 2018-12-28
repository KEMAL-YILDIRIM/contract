import * as React from 'react'
import {
	DropTarget,
	DropTargetConnector,
	ConnectDropTarget,
	DropTargetMonitor,
} from 'react-dnd'

const style: React.CSSProperties = {
	border: '1px solid gray',
	height: '15rem',
	width: '15rem',
	padding: '2rem',
	textAlign: 'center',
}

const boxTarget = {
	drop(props: DropBoxProps, monitor: DropTargetMonitor) {
		if (props.onDrop) {
			props.onDrop(props, monitor)
		}
	},
}

export interface DropBoxProps {
	accepts: string[],
	onDrop: (props: DropBoxProps, monitor: DropTargetMonitor) => void
}

interface DropBoxCollectedProps {
	isOver: boolean,
	canDrop: boolean,
	connectDropTarget: ConnectDropTarget
}

class DropBox extends React.Component<
	DropBoxProps , DropBoxCollectedProps
> {
	render() {
		const { canDrop, isOver, connectDropTarget } = this.props
		const isActive = canDrop && isOver

		return connectDropTarget(
			<div style={style}>
				{isActive ? 'Release to drop' : 'Drag file here'}
			</div>,
		)
	}
}

export default DropTarget<DropBoxProps, DropBoxCollectedProps>(
	(props: DropBoxProps) => props.accepts,
	boxTarget,
	(connect: DropTargetConnector, monitor: DropTargetMonitor) => ({
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	}),
)(DropBox)