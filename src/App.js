import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import NativeSelect from '@material-ui/core/NativeSelect';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slider from '@material-ui/core/Slider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

import tiposDeFundacoes from './utils/tiposDeFundacoes';
import { tabelaKAlpha } from './utils/aokiVelloso';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4, 0, 4, 0),
    // padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    marginBottom: theme.spacing(5)
  },
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    width: 200,
  },
  geometrico: {
    flexDirection: 'column'
  },
  comparativo: {
    height: 400,
    width: '100%',
    '& $div.recharts-responsive-container': {
      marginLeft: -25
    }
  },
  tableRoot: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 550,
  },
  arranjo: {
    margin: theme.spacing(2, 0, 0, 0),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  subArranjo: {
    // display: 'flex',
    position: 'relative',
    height: 100,
    width: '100%'
  },
  select: {
    display: 'flex'
  },
  etapa: {
    margin: theme.spacing(6, 0, 1, 0),
  },
  listaEstacas: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.default
  },
  falha: {
    backgroundColor: '#ed4b82'
  },
  nested: {
    paddingLeft: theme.spacing(6),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  soloParams: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  profundidade: {
    flexDirection: 'column'
  },
  slider: {
    maxWidth: 240,
    margin: theme.spacing(4,0,4,0)
  },
  max: {
    margin: theme.spacing(0,0,4,0)
  },
  last: {
    flexDirection: 'column'
  }
}));

const arranjos = [
  {
    //   x       x
    // x   x   x   x
    // x   x   x   x
    //   x       x
    nome: "Dupla de hexagonal",
    felds: 0.5832,
    m: 6,
    n: 2,
    coords: [
         [1.5,1],      [3.5,1],
      [1,2],[2,2],[3,2],[4,2],
      [1,3],[2,3],[3,3],[4,3],
         [1.5,4],      [3.5,4],
    ]
  },
  {
    // x   x   x   x
    // x   x   x   x
    // x   x   x   x
    nome: "Dupla de seis",
    m: 3,
    n: 4,
    coords: [
      [1,1],[2,1],[3,1],[4,1],
      [1,2],[2,2],[3,2],[4,2],
      [1,3],[2,3],[3,3],[4,3],
    ]
  },
  {
    // x   x   x   x
    // x   x   x   x
    nome: "Duplo de quatro",
    m: 2,
    n: 4,
    coords: [
      [1,1],[2,1],[3,1],[4,1],
      [1,2],[2,2],[3,2],[4,2],
    ]
  },
  {
    // x   x   x   x
    //   x       x
    // x   x   x   x
    // 12 * 4 + 10 * 4 + 9 * 2
    nome: "Dupla de cinco",
    felds: 0.6625,
    m: 2,
    n: 5,
    coords: [
      [1,1],[2,1],[3,1],[4,1],
        [1.5,2],    [3.5,2],
      [1,3],[2,3],[3,3],[4,3],
    ]
  },
];

const useStyles1 = makeStyles(theme => ({
  secao: {
    position: 'absolute',
    left: props => theme.spacing(props.lateral),
    right: props => theme.spacing(props.lateral),
    top: props => theme.spacing(props.top - 1),
    width: theme.spacing(1),
    height: theme.spacing(1),
    borderRadius: 100,
    backgroundColor: 'black',
  },
}))

const Secao = (props) => {
  const classes = useStyles1(props);
  return (
    <div className={classes.secao} />
  )
}

const Fileira = ({hex, arranjo}) => {
  const classes = useStyles();
  return (
    <div className={classes.subArranjo}>
      {arranjo.map((a,index) => (
        <Secao key={index} top={a[1] * 3} lateral={a[0] * 3}/>
      ))}
    </div>
  )
};

const converseLabarre = (d, s, m, n) => (
  1 - Math.atan(d / s) * 180 / Math.PI * ((n - 1) * m + (m - 1) * n) /
  (90 * m * n)
);

const soloInicial = [
  {
    nome: "Argila siltosa",
    nspt: 3,
    h: 3,
    inicio: 0,
    profundidade: 3,
    k: 0.25,
    alpha: 5.5
  },
  {
    nome: "Argila arenosa",
    nspt: 9,
    h: 3,
    inicio: 3,
    profundidade: 6,
    k: 0.48,
    alpha: 4
  },
  {
    nome: "Areia argilosa",
    nspt: 14,
    h: 4,
    inicio: 6,
    profundidade: 10,
    k: 0.53,
    alpha: 3
  },
  {
    nome: "Areia siltosa",
    nspt: 24,
    h: 5,
    inicio: 10,
    profundidade: 15,
    k: 0.53,
    alpha: 1.9
  },
  {
    nome: "Areia siltosa",
    nspt: 33,
    h: 5,
    inicio: 15,
    profundidade: 20.05,
    k: 0.8,
    alpha: 2
  },
]

const cargaPonta = (areaPonta, k, f1, nspt) => areaPonta * k * nspt / f1;
const cargaLatetal = (solo, estaca, hEstaca, f2, quadrada) => {
  const tabela = solo.map(s => ({
    ...s,
    u: quadrada ? estaca.secao * 4 : Math.PI * estaca.secao,
    l: s.profundidade > hEstaca ? hEstaca - s.inicio : s.h
  })).filter(t => t.inicio <= hEstaca)
  const cargaLateral = tabela.reduce((acc, v, i) => {
    const sum = typeof acc === 'number' ? acc : 0;
    const carga = sum + v.u * v.l * v.k * v.nspt * v.alpha / (f2 * 100)
    return carga
  }, 0);
  return cargaLateral
}
const camadaPonta = (h, solo) => solo.filter(s => s.inicio <= h && s.profundidade > h);

// function valueLabelFormat(value) {
//   return marks.findIndex(mark => mark.value === value) + 1;
// }

const comparacao = (cargaNominal) => {
  let comparacao = [];
  arranjos.map(arranjo => {
    const nEstacas = arranjo.m * arranjo.n;
    const cargaAplicadaCadaEstaca = cargaNominal * 1.10 / nEstacas;
    const tipos = tiposDeFundacoes.filter(tipo => (
      tipo.variacoes.some(v => v.carga >= cargaAplicadaCadaEstaca)
    )).map(tipo => ({
      ...tipo,
      variacoes: tipo.variacoes.filter(variante => (
        variante.carga >= cargaAplicadaCadaEstaca
      )).map(v => {
        const e = !arranjo.felds ? {
          eficiencia: converseLabarre(
            v.secao,
            v.d,
            arranjo.m,
            arranjo.n
          ),
          metodoEfeitoGrupo: 'labarre'
        } : {
          eficiencia: arranjo.felds,
          metodoEfeitoGrupo: 'felds'
        }
        return {
          ...v,
          ...e
        }
      })
    }))

    tipos.map(tipo => {

      tipo.variacoes.map(v => {
        const areaPonta = tipo.nome === 'Franki'
        ? 0.38
        : tipo.quadrada
          ? Math.pow(v.secao / 2, 2)
          : Math.pow(v.secao / 2, 2) * 3.14592654;

        let distancia = 24;
        let bounds = [4, 20]
        let res = {};
        let h;

        while (distancia > 0.005) {
          h = (bounds[0] + bounds[1]) / 2;

          const ultimaCamada = camadaPonta(h, soloInicial)[0];
          const cP = cargaPonta(areaPonta, ultimaCamada.k, tipo.f1, ultimaCamada.nspt);
          const cL = cargaLatetal(soloInicial, v, h, tipo.f2, tipo.quadrada);
          const pr = cP + cL;
          const pAdm = pr / 2 * 1000
          const pAdmCorrigida = pAdm * v.eficiencia
          res = {
            cp: cP * 1000,
            cl: cL * 1000,
            pr: pr * 1000,
            pAdm,
            pAdmCorrigida
          }

          if (res.pAdmCorrigida >= cargaAplicadaCadaEstaca) {
            bounds[1] = h;
          }
          else {
            bounds[0] = h;
          }
          distancia = bounds[1] - bounds[0];
        }

        comparacao.push({
          id: `${arranjo.nome} - ${tipo.nome} - ${v.secao}`,
          profundidade: h,
          nome: tipo.nome,
          secao: v.secao,
          arranjo: arranjo.nome,
          pAp: cargaAplicadaCadaEstaca,
          ...res,
        })
      })

    })

  })
  return comparacao;
};

function App() {

  const classes = useStyles();
  const [cargaNominal, setCargaNominal] = React.useState((2500 + 155) * 2);
  const [arranjo, setArranjo] = React.useState(0)
  const [cargaAplicadaCadaEstaca, setCargaAplicadaCadaEstaca] = React.useState(null);
  const [estacas, setEstacas] = React.useState(null);
  const [checked, setChecked] = React.useState(null);
  const [solo, setSolo] = React.useState(soloInicial);
  const [profundidadeEstaca, setProfundidadeEstaca] = React.useState(10);
  const [aoki, setAoki] = React.useState(null);
  const [comparativo, setComparativo] = React.useState(null);

  const handleChange = event => {
    const value = Number(event.target.value);
    if (value >= 0) {
      setCargaNominal(value);
    }
    else alert('Apenas numero!')
  };

  React.useEffect(() => {
    const d = arranjos[arranjo].m * arranjos[arranjo].n;
    setCargaAplicadaCadaEstaca(cargaNominal * (1.1) / d );
    setChecked(null);
  }, [cargaNominal, arranjo]);

  React.useEffect(() => {
    const c = comparacao(cargaNominal)
    setComparativo(
      c.sort(function (a, b) {
        if (a.profundidade > b.profundidade) {
          return 1;
        }
        if (a.profundidade < b.profundidade) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    );
  }, [cargaNominal]);

  React.useEffect(() => {
    const tipos = tiposDeFundacoes.filter(tipo => (
      tipo.variacoes.some(v => v.carga >= cargaAplicadaCadaEstaca)
    )).map(tipo => ({
      ...tipo,
      variacoes: tipo.variacoes.filter(variante => (
        variante.carga >= cargaAplicadaCadaEstaca
      )).map(v => {
        const e = !arranjos[arranjo].felds ? {
          eficiencia: converseLabarre(
            v.secao,
            v.d,
            arranjos[arranjo].m,
            arranjos[arranjo].n
          )
        } : {}
        return {
          ...v,
          ...e
        }
      })
    }))
    setEstacas(tipos);
    setChecked(null);
  }, [cargaAplicadaCadaEstaca, arranjo]);

  const handleChecked = (estacaIndex, secaoIndex) => {
    setChecked([estacaIndex, secaoIndex])
  }

  React.useEffect(() => {
    if (checked) {
      const areaPonta = estacas[checked[0]].nome === 'Franki'
      ? 0.38
      : estacas[checked[0]].quadrada
        ? Math.pow(estacas[checked[0]].variacoes[checked[1]].secao / 2, 2)
        : Math.pow(estacas[checked[0]].variacoes[checked[1]].secao / 2, 2) * 3.14592654
      const ultimaCamada = camadaPonta(profundidadeEstaca, solo)[0];
      const cP = cargaPonta(areaPonta, ultimaCamada.k, estacas[checked[0]].f1, ultimaCamada.nspt);
      const cL = cargaLatetal(solo, estacas[checked[0]].variacoes[checked[1]], profundidadeEstaca, estacas[checked[0]].f2, estacas[checked[0]].quadrada);
      const pr = cP + cL;
      const pAdm = pr / 2 * 1000
      const pAdmCorrigida = arranjos[arranjo].felds
      ? pAdm * arranjos[arranjo].felds
      : estacas[checked[0]].variacoes[checked[1]].eficiencia * pAdm;
      setAoki({
        cp: cP * 1000,
        cl: cL * 1000,
        pr: pr * 1000,
        pAdm,
        pAdmCorrigida
      })
    }
  }, [checked, solo, profundidadeEstaca])

  const onChangeCommitted = (event, value) => {
    setProfundidadeEstaca(value);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Typography variant='h4' gutterBottom className={classes.title}>
            Projeto 2 de fundações
          </Typography>
          {/*<ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='subtitle1'>
                1: Definir numero de pilares.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <FormControl className={clsx(classes.margin, classes.formControl)}>
                <Input disabled value={2} />
                <FormHelperText>Número de pilares</FormHelperText>
              </FormControl>
            </ExpansionPanelDetails>
          </ExpansionPanel>*/}

          <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='subtitle1'>
                1: Definir a carga.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <FormControl className={clsx(classes.margin, classes.formControl)}>
                <Input
                  value={cargaNominal}
                  onChange={handleChange}
                  endAdornment={<InputAdornment position="end">kN</InputAdornment>}
                />
                <FormHelperText>Carga total</FormHelperText>
              </FormControl>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='subtitle1'>
                2: Definir o arranjo geométrico.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.geometrico}>
              <FormControl className={clsx(classes.margin, classes.formControl)}>
                <NativeSelect
                  value={arranjo}
                  onChange={(e) => setArranjo(Number(e.target.value))}
                >
                {arranjos.map((a, i) => (
                  <option value={i} key={a.nome}>{a.nome}</option>
                ))}
                </NativeSelect>
                <FormHelperText>Arranjo geometrico</FormHelperText>
              </FormControl>
              <div className={classes.arranjo}>
                <Fileira arranjo={arranjos[arranjo].coords}/>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='subtitle1'>
                3: Calcular a carga aplicada em cada estaca.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant='body1'>
                Carga aplicada em cada estaca:
                {
                  cargaAplicadaCadaEstaca
                  ? ` ${cargaAplicadaCadaEstaca.toFixed(2)} kN`
                  : ' loading...'
                }
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>


          <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='subtitle1'>
                4: Filtrar entre os tipos de estacas, as que suportam a carga
                aplicada em cada pilar e selecionar a desejada.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div/>
              {estacas && (
                <List
                  className={classes.listaEstacas}
                  subheader={
                  <ListSubheader>
                    Estacas aceitaveis
                    {arranjos[arranjo].felds ? ` - Eficiência (Felds) ${Math.round(arranjos[arranjo].felds * 10000)/100} %` : ''}
                  </ListSubheader>
                }>
                  {estacas.map((estaca, estIndex) => (
                    <React.Fragment key={estaca.nome}>
                      <ListItem button key={estaca.nome}>
                        <ListItemText
                          primary={estaca.nome}
                        />
                        <ListItemText secondary={`F1: ${estaca.f1}`}/ >
                        <ListItemText secondary={`F2: ${estaca.f2}`}/ >
                      </ListItem>
                      {estaca.variacoes.map((v, index) => (
                        <ListItem
                          button
                          key={v.secao}
                          className={classes.nested}
                          onClick={() => handleChecked(estIndex, index)}
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={checked ? estIndex === checked[0] && index === checked[1] : false}
                              tabIndex={-1}
                              disableRipple
                            />
                          </ListItemIcon>
                          <ListItemText primary={`Secao ${v.secao} m`}/>
                          <ListItemText secondary={`Carga maxima ${v.carga} kN`}/>
                          <ListItemText secondary={`Distância mínima ${v.d} m`}/>
                          {v.eficiencia ? <ListItemText secondary={`Eficiência (Labarre) ${Math.round(v.eficiencia * 10000)/100} %`}/> : null}
                        </ListItem>
                      ))}
                    </React.Fragment>
                  ))}
                </List>
              )}
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='subtitle1'>
                5: Definir os parametros K e alpha.
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List
                className={classes.listaEstacas}
                subheader={
                <ListSubheader>
                  Parametros do solo
                </ListSubheader>
              }>
                {solo.map((s, i) => (
                  <React.Fragment key={i}>
                    <ListItem
                      button
                      key={i}
                    >
                      <ListItemText
                        primary={`Camada ${i + 1}`}
                      />
                    </ListItem>
                    <ListItem className={classes.nested}>
                      <NativeSelect
                        value={s.nome}
                        // onChange={(e) => setArranjo(Number(e.target.value))}
                      >
                      {tabelaKAlpha.map((a, i) => (
                        <option disabled value={a.nome} key={i}>{a.nome}</option>
                      ))}
                      </NativeSelect>
                      <ListItemText
                        secondary={`nspt = ${s.nspt}`}
                      />
                      <ListItemText
                        secondary={`h = ${s.h} m`}
                      />
                      <ListItemText
                        secondary={`k = ${s.k} MPa`}
                      />
                      <ListItemText
                        secondary={`alpha = ${s.alpha} %`}
                      />
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='subtitle1'>
                6: Definir a área da ponta
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant='body1'>
                {
                  !checked
                  ? <span>Escolha uma estaca na estapa 4</span>
                  : estacas[checked[0]].nome === 'Franki'
                    ? <span>0.38 m² (bulbo de 180 l)</span>
                    : estacas[checked[0]].quadrada
                      ? `${Math.round(Math.pow(estacas[checked[0]].variacoes[checked[1]].secao, 2) * 10000) / 10000} m²`
                      : `${Math.round(Math.pow(estacas[checked[0]].variacoes[checked[1]].secao / 2, 2) * 3.14592654 * 10000) / 10000} m²`
                }
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='subtitle1'>
                7: Definir a profundidade
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.profundidade}>
              <Slider
                valueLabelDisplay="on"
                getAriaValueText={
                  function valuetext(value) {
                    return `${value} m`;
                  }}
                className={classes.slider}
                defaultValue={profundidadeEstaca}
                step={0.1}
                min={4}
                max={20}
                onChangeCommitted={onChangeCommitted}
              />
              { aoki && (
                <Typography variant='body1' className={classes.max}>
                  Carga máxima suportada por cada estaca: {Math.round(cargaAplicadaCadaEstaca, 2)} kN
                </Typography>
              )}
              {
                aoki ?
                  <List
                    className={
                      clsx(classes.listaEstacas, {
                        [classes.falha]: cargaAplicadaCadaEstaca > aoki.pAdmCorrigida
                      })}
                    subheader={
                    <ListSubheader>
                      Resultados
                    </ListSubheader>
                  }>
                    <ListItem button>
                      <ListItemText
                        primary={`carga na ponta ${Math.round(aoki.cp,2)} kN`}
                      />
                    </ListItem>
                    <ListItem button>
                      <ListItemText
                        primary={`carga lateral ${Math.round(aoki.cl,2)} kN`}
                      />
                    </ListItem>
                    <ListItem button>
                      <ListItemText
                        primary={`capacidade de carga ${Math.round(aoki.pr,2)} kN`}
                      />
                    </ListItem>
                    <ListItem button>
                      <ListItemText
                        primary={`carga admissivel ${Math.round(aoki.pAdm,2)} kN`}
                      />
                    </ListItem>
                    <ListItem button>
                      <ListItemText
                        primary={`carga admissivel corrigida ${Math.round(aoki.pAdmCorrigida,2)} kN`}
                      />
                    </ListItem>
                  </List>
                : <Typography variant='body1'>Escolha uma estaca na etapa 4</Typography>
              }
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='subtitle1'>
                8: Comparativo
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.last}>
              <div className={classes.comparativo}>
                {comparativo && comparativo.length > 0 ? (
                  <ResponsiveContainer width='99%' height="90%">
                    <BarChart data={comparativo}>
                      <XAxis />
                      <YAxis />
                      <Tooltip formatter={(value, name, props) => {
                          return (`${Math.round(value * 100) / 100} m`)
                        }}
                        labelFormatter={(index) => {
                          return comparativo ? comparativo[index].id : index
                        }}
                      />
                      <Legend />
                      <Bar dataKey="profundidade" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                )
                :
                <Typography variant='body1'>Nenhum dado disponivel</Typography>
              }
              </div>
              {comparativo && comparativo.length > 0 && (
                <div className={classes.tableRoot}>
                  <Table className={classes.table} size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Estaca</TableCell>
                        <TableCell align="right">Secao (m)</TableCell>
                        <TableCell align="right">Arranjo</TableCell>
                        <TableCell align="right">h (m)</TableCell>
                        <TableCell align="right">Papl (kN)</TableCell>
                        <TableCell align="right">Ponta (kN)</TableCell>
                        <TableCell align="right">Lateral (kN)</TableCell>
                        <TableCell align="right">PR (kN)</TableCell>
                        <TableCell align="right">Padm (kN)</TableCell>
                        <TableCell align="right">Padmc (kN)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {comparativo.map(row => (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">{row.nome}</TableCell>
                          <TableCell align="right">{row.secao}</TableCell>
                          <TableCell align="right">{row.arranjo}</TableCell>
                          <TableCell align="right">{Math.round(row.profundidade* 100) / 100}</TableCell>
                          <TableCell align="right">{Math.round(row.pAp * 100) / 100}</TableCell>
                          <TableCell align="right">{Math.round(row.cp * 100) / 100}</TableCell>
                          <TableCell align="right">{Math.round(row.cl * 100) / 100}</TableCell>
                          <TableCell align="right">{Math.round(row.pr * 100) / 100}</TableCell>
                          <TableCell align="right">{Math.round(row.pAdm * 100) / 100}</TableCell>
                          <TableCell align="right">{Math.round(row.pAdmCorrigida * 100) / 100}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </ExpansionPanelDetails>
          </ExpansionPanel>


        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
