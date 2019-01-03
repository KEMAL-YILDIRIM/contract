import React from 'react'
// Import React FilePond
import {FilePond, File, registerPlugin} from 'react-filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
// Import the Image EXIF Orientation and Image Preview plugins
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
//Language
import {FilePondLanguage} from 'assets/helpers/Language'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class DropBoxArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Set initial files
            files: ['index.html']
        };
    }

    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }

    render() {
        return (
            <FilePond
                ref={ref => this.pond = ref}
                allowMultiple={true}
                server="/api"
                oninit={() => this.handleInit()}
                {...FilePondLanguage}
                onupdatefiles={(fileItems) => {
                this.setState({
                    files: fileItems.map(fileItem => fileItem.file)
                });
            }}>

                {/* Update current files  */}
                {this
                    .state
                    .files
                    .map(file => (<File key={file} src={file} origin="local"/>))}
            </FilePond>
        );
    }
}

export default DropBoxArea;