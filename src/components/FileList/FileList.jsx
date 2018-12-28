import React from 'react';

export interface FileListProps {
    files : any[]
}

class FileList extends React.Component<FileListProps> {

    checkFiles = (files) => {
        let response = '';
        if (files.length === 0) {
            response = <div>
                Lütfen yüklemek istediğiniz dosyaları buraya bırakın.
            </div>;
        } else {
            response = <div>{this.list(files)}</div>;
        }
        return response;
    }

    list = (files) => {
        files.map(file =>< li key = {
            file.name
        } > {
            file.name
        }
        _ {file.type}--yukleme tarihi : {
            Date.now()
        }
        --boyutu : {
            file.size
        } < /li>)
    }

    render() {
        const {files} = this.props;
        return (this.checkFiles(files));
    }
}

export default FileList;