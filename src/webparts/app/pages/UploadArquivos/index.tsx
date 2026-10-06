import * as React from 'react';
import * as S from './styles';

const UploadArquivos = (): JSX.Element => {
  const [files, setFiles] = React.useState<File[]>([]);
  const [documentName, setDocumentName] = React.useState('');
  const [category, setCategory] = React.useState('Projeto');
  const [responsible, setResponsible] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const nextFiles = Array.from(event.target.files);
    setFiles((existingFiles) => {
      const merged = [...existingFiles, ...nextFiles];
      const unique = merged.filter(
        (file, index, list) =>
          list.findIndex(
            (item) => item.name === file.name && item.size === file.size && item.lastModified === file.lastModified,
          ) === index,
      );

      return unique;
    });

    event.target.value = '';
  };

  const removeFile = (fileName: string) => {
    setFiles((state) => state.filter((file) => file.name !== fileName));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.Title>Upload de arquivos</S.Title>
          <S.Subtitle>Centralize a entrega de documentos e arquivos para revisão e aprovação do planejamento.</S.Subtitle>
        </S.Header>

        <S.Grid>
          <S.Card>
            <S.Dropzone htmlFor="upload-file">
              <S.DropzoneText>
                <S.DropzoneTitle>Arraste e solte arquivos aqui</S.DropzoneTitle>
                <S.DropzoneHint>ou clique para selecionar documentos PDF, XLSX, DOCX e imagens.</S.DropzoneHint>
              </S.DropzoneText>
            </S.Dropzone>
            <S.FileInput id="upload-file" type="file" multiple onChange={handleFileSelection} />

            {!!files.length && (
              <S.List>
                {files.map((file) => (
                  <S.FileItem key={`${file.name}-${file.lastModified}`}>
                    <S.FileMeta>
                      <S.FileName>{file.name}</S.FileName>
                      <S.FileSize>{(file.size / 1024 / 1024).toFixed(2)} MB</S.FileSize>
                    </S.FileMeta>
                    <S.RemoveFile type="button" onClick={() => removeFile(file.name)}>
                      Remover
                    </S.RemoveFile>
                  </S.FileItem>
                ))}
              </S.List>
            )}

            <S.Form>
              <S.Field>
                Nome do documento
                <S.Input value={documentName} onChange={(event) => setDocumentName(event.target.value)} placeholder="Ex.: Anexo Plano Diretor" />
              </S.Field>

              <S.Field>
                Categoria
                <S.Select value={category} onChange={(event) => setCategory(event.target.value)}>
                  <option value="Projeto">Projeto</option>
                  <option value="Relatório">Relatório</option>
                  <option value="Checklist">Checklist</option>
                  <option value="Comunicado">Comunicado</option>
                </S.Select>
              </S.Field>

              <S.Field>
                Responsável
                <S.Input value={responsible} onChange={(event) => setResponsible(event.target.value)} placeholder="Nome da equipe ou gestor" />
              </S.Field>

              <S.Field>
                Observações
                <S.Textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Descreva o objetivo, prazo ou contexto do envio" />
              </S.Field>
            </S.Form>

            <S.Actions>
              <S.SecondaryButton type="button">Salvar rascunho</S.SecondaryButton>
              <S.PrimaryButton type="button" onClick={handleSubmit}>Enviar para aprovação</S.PrimaryButton>
            </S.Actions>

            {isSubmitted && (
              <S.Success>
                Arquivos enviados com sucesso e encaminhados para análise.
              </S.Success>
            )}
          </S.Card>

          <S.Card>
            <S.SummaryPanel>
              <S.SummaryRow>
                <S.SummaryLabel>Quantidade de arquivos</S.SummaryLabel>
                <S.SummaryValue>{files.length}</S.SummaryValue>
              </S.SummaryRow>
              <S.SummaryRow>
                <S.SummaryLabel>Categoria</S.SummaryLabel>
                <S.SummaryValue>{category}</S.SummaryValue>
              </S.SummaryRow>
              <S.SummaryRow>
                <S.SummaryLabel>Responsável</S.SummaryLabel>
                <S.SummaryValue>{responsible || 'Não informado'}</S.SummaryValue>
              </S.SummaryRow>
              <S.SummaryRow>
                <S.SummaryLabel>Prazo solicitado</S.SummaryLabel>
                <S.SummaryValue>3 dias úteis</S.SummaryValue>
              </S.SummaryRow>
              <S.SummaryRow>
                <S.SummaryLabel>Status</S.SummaryLabel>
                <S.SummaryValue>{isSubmitted ? 'Em revisão' : 'Rascunho'}</S.SummaryValue>
              </S.SummaryRow>
            </S.SummaryPanel>
          </S.Card>
        </S.Grid>
      </S.Content>
    </S.Container>
  );
};

export default UploadArquivos;
