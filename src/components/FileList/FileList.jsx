import React from 'react';

export interface FileListProps {
    files : any[]
}

default class FileList extends Component < FileListProps > {
    checkFiles = (files) => {
        let response = '';
        if (files.length === 0) {
            reponse = <div>
                Lütfen yüklemek istediğiniz dosyaları buraya bırakın.
            </div>;
        } else {
            response = <div>Dosyalar bulundu.</div >;
        }
        return response;
    }

    list = 

    render() {
        const {files} = this.props;
        return (this.checkFiles(files));
    }
}