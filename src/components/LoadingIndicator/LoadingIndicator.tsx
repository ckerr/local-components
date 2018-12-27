import React from 'react';
import LocalComponentPropsI from '../../common/structures/LocalComponentPropsI';
import classnames from 'classnames';
import styles from './LoadingIndicator.sass';

interface PropsI extends LocalComponentPropsI {

	big?: boolean;
	color?: 'Green' | 'Gray';

}

export default class LoadingIndicator extends React.Component<PropsI> {

	static defaultProps: Partial<PropsI> = {
		big: false,
		color: 'Green',
	};

	render () {
		return (
            <div
				className={classnames(
					styles.LoadingIndicator,
					{
						[styles.LoadingIndicator__Gray]: this.props.color === 'Gray',
						[styles.LoadingIndicator__Big]: this.props.big,
					}
				)}
			>
                <div />
                <div />
                {this.props.big && <div />}
            </div>
        );
	}

}