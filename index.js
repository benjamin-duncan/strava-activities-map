import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Point from 'ol/geom/Point';
import Polyline from 'ol/format/Polyline';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import {
  Circle as CircleStyle,
  Fill,
  Icon,
  Stroke,
  Style,
} from 'ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {getVectorContext} from 'ol/render';

var lon = 12;
var lat = 52.85;
var zoom = 9;
var map, layer;


    map = new OpenLayers.Map( 'map' );
    layer = new OpenLayers.Layer.WMS( "OpenLayers WMS",
            "http://vmap0.tiles.osgeo.org/wms/vmap0",
            {layers: 'basic'} );
    map.addLayer(layer);
    map.setCenter(new OpenLayers.LonLat(lon, lat), zoom);

var polyline = "m}e`IqvbgAkJqyAoI}w@wTupA}Myb@{CmFsDcEuEgCgFa@oFj@mNzFsFpEiLpQmDxIkMxa@cGpVqE`XqC~Y_Bfw@b@jdAyAzHyCeBRmGlDIp@zHcDpBi@kG`D{@hArHuCtDqBiEhCsCxBfGiBzGcE@{@yF|GtBg@xIsDrB{BcEbAoFnDt@t@|I{BxGiDgABqG`DkAzBbG_A`IoDd@q@cGrD}AhBvGcC~FgDeBbAwF~DjBPrIqDjC}B}DlBmF|DvARbJeDlEuCqCfAiFdExAh@fIwCbEuCgCf@mG~CqBdDvDE|IgDzCsBaE~AgFvD|BV|IsCvG{Et@qCgERaHnCyElEBtCrFMrI_D|DqCyCz@_GlQ~ApEcBdq@es@vx@srApC_Fjc@}y@fCoEfCkCtCvArAvHf@tJCbJeBnHqDrD_E\\qDuC{AeHTaHvBsDbD?lEvPbD~C~Jb@`DaCvDjAStJmEnCwDmAEsGxDoA}B|S}AuEdC}DfEfDNbJmDjCsB}Dj@wG~CyDvJaE~HkHxMwOjMiMjMoK~KeGfEmDdHaMvLka@tNc]pLeSzMcQ|I_UjEcOnCaOh@oG~@iPc@gGqBwEuCmDuCuCeDyA{DHoP|FyIpG{BtF}@lIRzUcAbI_Np\\uHrKsGpOgMtm@o\\bdA_Qvo@uHb_@{Gl^_Df^iB`JyCvHgEnCuCyCzEkCt@rKiC|FyD^sBsD|@cEhDRtBtF_FpNeD}Ag@kFpAgE|Co@pCjECjJkDlEmDqCIqG`C{CvDdBpAfI_BhIgEpCwG_InAmEhDe@~CvDt@hIsAnIsDjEcEWwAqFz@qGfDgChD|DsF|L_AeFdCqBxC|FoAdIoEn@cB{E|A{DlDrC\\rIiCrG_E`@yA}DpAoEbDI|BbFF|IkCrGaEp@eC{CYmF|AkD`DDrCzEHvIkCdGkEEyA{ExAkElDF|BbGm@hJaErDyD_B{@gGzAqElDRlBzGk@pJuDtEaEeAq@wGlBgEnDQ|CbFmAhTqEvAaFcLf@kGpCqMvBaUvA_FvCcD`E`BxAtIaHlK{BgEn@uGjDqApDhE`AxJiA|IkDpCsDuAcBoF~D}K~CiBzIwBtWoJlRoI`VsLzPmKrv@_r@`e@m`@jKcK|IuKpYeWbDmBrDhCNnIyC`EkD}Aa@yFtAyD|CJdBxHiB|GoDEgBuEk@oFf@{ErD]fBvGqG`LuCmBAmF`DgAtCbGHnIoBpG{DnA}BcDt@uFxD]tCbGNnIwCnI{DB_BmEz@sF`EBrB|Ga@xI}BnFsDR{BoDm@oF]wNwDy]gEap@eFu^YmOu@yFmB_FwCuD{DaC}q@oT_Y{Eo_@{E{Oq@}DHoYtCiEtCkBbI~@xIhDnClBoDoAoF}DCeCxFHbJpBzGnDj@hA{E}BsD}DdDo@tJtBnGjDSeA}LuDdCa@lJfC~FrDbA~CeCx@qGoC}DiDvDBbJnDrCpCyCUyFsDYqBfH`AdIlDtBdC}CC{FgCiCqDfDm@rJdAvIbD~EfE[nB{EqAeFgEL{DpEuAfJ~@lJnDtEfEDjCyDNmGsBcEcEr@eCbIf@nKvDtErDiAv@_GsB}DwDr@wIdMcO~OcE~CoEpA{EUaDqDR_GrDl@T`JsDzCwC_Dh@uFzDIvChFFpJ_DzFkEAmBmFIyGnDmB`ChGgAbIaEGYeGxD[nAnHoChF_DkC\\cGlDcAzCdEt@tIcBrHyDdAuBgEn@kG`DyAbDfDp@tI}BlGaE\\qBqE`@mGlDmB`DpDBrIcDbEcEEgCaE]aHxBqEtErA`CpHO~J_CnIyD`CuCeDEsHfC}E`EDlCfGLdK}BvHgE`BsDaCcAqGlA}F`D{AfDvBbB~H]lJyCxFkERkCkE]cHxAoFpDyA~DIvDq@tUiKhFuAnNv@vNCxZoBpE@rd@pEpRRhLi@rPuBvj@sLbNwE|I{@tD~A~CbEzBjHjCpTnCjm@tAnv@u@vv@}DtnAyA`T}Jpd@wNxa@_Srd@iAbHBvIrAbIhDlC`CeDo@gGiDgAwCfEu@dIf@zHlB`H~CpD`CaCaAoFwDRkAhIdBbH|CY?uF_DmByCbENrIhDhD`CkCoAeFyDj@gBfHdA~HhDhBfBiDkAgFaERmBjHz@rIdD|BdAkKsDk@}BbGl@hIbD|BvBeD{@yFoDm@wBnG|@xHlDtA~A_E{AcFwDP_B`HnAlHjDbAxAqE{A{EqDXeBvGxAtHtDLn@yFaCgDcDtBk@zH`CxFpDa@f@cGaCuDgDfAkAhHhAjHdDnBfCmCOkG{ByDkN_PsIwL{^}o@}M}PqZw[_f@gk@sb@o_@wJkFie@yRwSmEuE[qEnA{E\\wCqCDuFxCy@dBtG}BhGmDsAOaFxCoAzC`EHtIeDzDuCoC^iFbDSlBfGkAlIsDdBuBeDz@mEpDdA|@jIwBlGuDBgTqo@kLcm@cEwNqT}y@eIib@kLqc@yLuZcNgb@kOua@gOgYuMwa@}B{EoInDmB`JWfK~AtHpDd@tAqEwBsDwDlCBlIhG_BmCgD}CfEt@fI`EJ^mGeDiB{CzEf@|IjDtA|AyFmBsEsDtAjAlQxCsBu@gGcEj@yAzHvBrG~CqASuGcEOcBtHvBpG`DyAK{GgDsBwCtFfAhIrDDn@eGkCsD}CpEx@~IhDFGaG_EUwAjIzBbGpC_BSwGkb@c`A_CgHsb@scB}S_eAkHa\\gYunAgKy\\qVa`AaHy_@aUcbA}Nwt@{BuHeHmLaC{FyAuGd@mGhDs@pChGg@lJmDhCuC_C_@{EvBgCrDjCpAnI{ApIsDdAmB_DXmFtCwBnDzB~@`JeCbHsDf@gE{Hw@{MiBuLmAmG_XwpAaRoiAyQux@_Ho_@gPkn@o@uHp@gIpDqCpCbGiBfGwDiA]qGjCkD|DvB\\nIqCfEyCqBz@yFjE~@\\vIcD`CmBkEhA{GfEApA~HcC`FwDkAcByFiFoWaHyUcByMiGcYmSoq@uSs_@uh@yx@{O}XyIyPsNy_@yU}g@wb@ss@ui@qw@eJ{JgU}Oko@ko@gEoDeLaFaCuEp@iGtDg@`B`IiCvF{CmBLcGtCkCxDlC`@pJeCxH}DnCaEe@kC}DeBgFoCyCcEl@cBnHvCtEjCaE{AoF}Df@iCvGHtJhDzErD}Aj@mGqBuF{CwBcIcB{HwD_SyRoa@gh@mt@mfAyn@st@sS_X{^qo@}Vii@y\\_h@mM_UgE{L|@uFnEf@lCtHYjJ{CfFwDf@aMiIeDw@sCiBoB}CsDkMgOmw@_Nox@SwG^eHlDyBzBzFwAjG}DS{AoFlB{EzC|DeA`HcDu@R}FpDR^|HeDzAm@kFhDyA~A|GeCtE}BeD~AcFhDrCShIiD|@]oGlDiA~@tH_DnDcBmEfCeDfC~F_BnHeDiAp@iGjDxAH~IkDvBsAkFnCyC|BjGiBlHsD_@NcGrDp@BnIsDdCqBaE|BwD|CnEcAzHsDLg@gG|CiBjCdFSbJsDbBsAoFpCqC`CpF_BpGcDoARgGlDSbBhHyApHyDp@g@oFjDSZjJiClGiD[f@_GvDbBBvJkC~EaCeDrBoEdDzDw@pHiDq@`@iG|DDnAfH}CrDsBqE`CiDdCvFcB`HmDmAj@sGfEp@p@nIiDnCcBqEbCwDfD|NiDnAmAqFZyHy@aH}B{EmVuYqJkNmI_SuNco@eEgBsBrGfCpG`EwDyAqEkChFzB`HrDiBu@mFmD~Bn@jIbELt@sG}CcBcBxGtCdFfDqCg@mGsDb@q@hIrDdElCaEgAuFmD`AYbIrDjD~CkD]kHqBuGwc@}kAyd@stAkHyUa[}dA}Tsq@kGgPkSuc@oa@ubAsP{^{EiNkM{h@uS_qAqEi`@kEmb@_D}b@iXqlDuEib@wHoj@aJ{cA_K{z@cJqo@iGkm@cIqm@aW{eBqEc`@cNqfAwOqfA}DaT_Du_@aFsNsDeAwDxAyCzFYdJjCjFhD{@u@qLoDvBu@|IpB~GpGyEiAeFiDHgBrRfDnDdDsBDaHmCoCmDnCq@fJfC~F|Dq@bAyFyA}DiDOiDfEu@rItA`I|D~BnCiDg@_HgEeAwDvGn@fLvEvBnC_FiAcGkEj@_B`JtC|GlDgCg@wGkEGsBnHzAlIfEHn@qGyH~CjA`JpE^rAiGeCgEcEfBk@fJhD`FvFiKiDqOuBsS_JiuAsCcl@gFap@cGsl@qIog@aMigAqPk|@]yGjCgBvBtFyAdHeEYoBeFz@eFjDxB]tHiD\\q@kFdCeDbDb@dAdHkCjFiD_A{BqOqBaFuHyIaPuJ{CqCmAyE`CuDjCzE{ArG_DuApAeFnA`NeDeAv@yF`E~@p@vIuChEkC{CjA_FrDtBd@tI}C`EkD{BmDiOkJ}q@wHi\\yFkZgDmXKcHpCqDlDbDl@vI}AjIyDvAoA{EnC_DjDfCf@dI{C~EoCgCbFiCCvImDxAgAaFpCsCnCtE_AtHoDIQgGbD}@lBlGiBdGiD{@RoGtDy@~BrF}AhGeDqAHwG~De@hCrHmApHuDIq@iGtC{DtDrCPxIcDrDyC{BRsGzDuA`CrQgDhBuAaFrBeF`ExA~@vIoC|E{CsBRmG|DeA`DtFYfJiD`CuCuCdDkKpDbEHxJiD|DyC_Db@aHnEIxAhTqDbAeB_FxAiGfE]tC`H[bJkD~AkCsEaEwPoMkb@oDkQc^omBmVsyAeA_F}CkAoDjE}ApJHzKbId^xFfa@}BbtAlBxGhE|CdC|GDnIaCzE_Dg@kCkCiBcEuCiByDfAcDjEyAbI`Fj_@iB|UoArIoHb[u\\hpAp@fT_@tJcBlJuChI_Zna@}AzGSfJiB|IcExFwSzMoDbDaElOBlJeA|IkG~QcBfJaHzk@uR|rCaA~H{BvGeBbJwAzYiBnu@_BxGcDx@cB}DwDi_AvAoFdDzBm@bIiDWJcGpDBfAhIqCdFoCkC~@wFxDPzB~Fk@bIyDz@aAsFfCeDhD`CCtIiDzDgEJ}DyAcBsEzBsDfClEoAfHiEp@eCoDxAgEbDhDq@tHgDYd@iFxDdAdAdIqBpGkCeHvDx@l@tI_B~VIlWlBbv@Eta@TrLhDrbBHtgAPjHnBfE|CgBiF{HeCnF]zHZnRxFfnArB`r@v@pJxCbE~CqASgG}DH}B|G^fIfDnAdAmFaCqE{DlA{@lH`CrDvBeDoAiGuDnAShIlCnBrAeFiB{EmDdAaAbIHnUaBtp@mClq@]fm@qDrpB{Ctr@CzJhCdFvCoCkAyFmEz@u@xIfCpEtBaDgBqEaE|BBhIdDtAn@qFcDuBaC`GnArGdDg@I}GkDcBoCfF~@nHtDCZoGiDaBiCxFnAxHfDDJuFyD_AgCjG^tIjB~HhQpg@~EnQnDt@`AwGqCyCuCxEdAhIxDa@ZgHyC{B}BjFzAdHlDaA?_HeDm@kB~FxA~GzD_AGeHaDw@aB|FbBnGlDqAMoHeDw@_BnGlBfGhD}A@gHaD_AyApGvB~FrD}Bg@eHqDOuAfGxAxGrDZbByFiB_FgDxAeBfG{BjPeCrDcEa@yDj@kCtETjIpD~BtAsFyCuFqE^aA|HzCnDpBuFwBsFwDjC`@xHvDl@XkHmDmBoBhGxBlFjCcD{AkFiD`Cl@pHnDBPiHsDqAmBlGxBzEjCcDuAuFyDhBDdInDbAf@qG_D_BgCnGiBfe@u@d]yDjkBiDt`AmFv{A{AjZmG~p@o@lLd@vr@dBfIbDbGzB`Ir@nJ_@nX_DfWuBvIuC|DoDBqBoErA{EbDdCM~HeDz@cAiFdCwBrBtEkA|G_DSM_GxCu@rBrF_@pHyC~B{B{DrA}EbDjAtAzHyCfg@I~HbBdSZvJS|KmBlYiDhZiFzp@gGhf@gJzbAsD`u@cGhmCeDlc@HnJlBnIrDjChBgEmBaEuDlDCvIzCjCfBkEuAeF}DjA{@rIfCrFzCeA]cG_EDuBnH|AdHlDe@@eGsDq@cCdGdAfIrDDT_GsDeAkCrGEhKl@xUtCnj@pDrtAfF|vAnKdwDvFl|AmAtIsDz@{@uFhDeAz@nH{ClE{CkCp@sFnD~@t@bIkCpFmDuANiG`E[pBtGaCvGaE]g@cGbDeCzChD]hIaEjA_BeFlBsE|D`CYrIgElCiCuDlAoFxD|@p@pIcDhEmCaDfA_FpDrBp@jJoJh`@uAtLcNjeBcEdgA{C`d@a@fj@f@~fAMvf@zBhHbE`AhCwEWeHeD}BiDtCe@hIhChG|D]|@mG}ByDiDjCSrIdDrElDkCIsGoDoAiC|F~@tIfEbBdC{Eq@gH{D_BeDxDa@|IdCjHfELbByFoAqGcEm@gDhE}DvPqJtl@sBlIkc@dtA}Yrq@{I`MsSpSoKlO{s@jsAgLxRac@xt@yPfVqRxRyCfHaAjWdDhF~CmB{@}FiEz@o@xIrDxCzBaFgBmFsEbBeA|IlCzGfEc@xAkG}@yGmDkCmE\\mDtDwBhHiLbj@kOpm@_FxVmJf]cNzu@{O`w@me@zsBaPji@mBrIsDlDgCcF|@_IbD}ErPwQdDcFjHgMjZoi@vFyMjK}`@|P{t@tUwiAvDi\\Dg^f@}GbB_FlJ_BvBcDrFyVbNu\\bE{IzCHlAvIyCpGyDDoAwE`C}C`CrFaBjHkDWWyFhDc@`AtHgCfGaEb@uD_B}CuCg@}FjCkC~BhFoAnIeEjC{CyCl@mGlDHxAdHwBlGcDcBp@}FhD~@HdIoDnCqBaE`BsEtCvCy@|HuD?[cGhCkEjRuP~k@if@tZyUxI_JvDX`@lImDtCvBqJrB|GxChDvDg@~DmDvd@el@vOwTtK}RrDbAAnIkE~@{@oFnC}AxBpGaClGwC{BdAuE`DhCc@tIwDR?cGjExAIjJsDzB_AoFxCq@nAlHqCtE{BsDhByDnCfEkAzHsDu@RqFhDh@b@vI}DzC_B{EzF|AkAlI}DCSwGbDk@nBvGkA|H}DGc@yF~Cs@z@dIcD~EgCuCnAgEzCdDHjJsDzCgBkErCmErJlGzDlBfh@hXdg@v]lNfHnjBrbA`iAxq@~a@`Ub\\jOjRpMhMdF|`@tHvLnAb[hAja@lE|SHlJYbb@aFlLl@t\\hFbEnBpVzTd_@lUf`@|OvLxCbRpCfYfJfDfBdAnHsCbGoDmA_AmGrA_E~CxBMdJyDbB_BkE~AiDxCtCSnI{DxAgAaF`CqChJdDzE`@ll@v@p\\u@zDs@f@eFqD]uAbJxC~F`CkDeCyCqC|GrBfIlDsAeA_FwDpDLjKrDzBf@yF{D]eAxIxCzE`CoDwBkEoD|DpAtJzD[@cGoDs@gB~HxC~FtCgCaAwFaEdA{@nJtCvGbDoA{@aGaErAItJvDzCa@iLyChObDlD`E]pc@}LdUmDxi@}InLgCzLg@xRdA|DMpAmEaCcD}DrDeA`Jz@~HjCxDxC]pBqCf@kEcAsFAeFnBwBlDY`EuAzY{NrVgJtd@aUhb@}ZhW{O`SwJhDpBrC~FjDdAnCwBrGkJvIiIb`@qTxKqA`Pu@nKsBbQ}FvPmDvTmJ~CIvG|LlDBpC{BhGkIfXyWhJ{Ev[yMdTmQ|NcJrBoCg@aFyDHmBrIhBhIrDj@pB_DoAkEeE~A_BvI|ApHpCgAm@mF}Dz@cA|IjCxFbDw@NaF_D}AgE~CiBdI`AzIvDtCxD@vZaDrV{@du@e@|q@vB`H{CnDW|D`@zBxFq@nI_DlGqEfDkEIwDsDiEGqBjHpBtGtCwByAyFaElCBjJhD`ATiGyDkAoCxGnAlIrDDHcGiEaAiCdI|AlIrDS?iG}Dy@eClIbBlIzDSHqGsDmBgDlG`@vJrD`CbB}EaCqEcExD@zJrD|BbBwEcCcEeEnDKzJhDbEdDcCm@sFoEl@oAzIjCdFhCaCiAcFcE~@wAhIdCzErBoDgCiDaE`DYzIbDtC~AkE{B}DyDdCq@bJzCxDvBeDyBaEgEfD]hJtCdE~CuBlBkFnDeCfEHdD`EIhIyDvBgBmEtB}CdDdAxAnHkCvGoDsAXyFzCwBh]{FnTiC`k@eL|Eq@brAcP`VyFle@}E`RcDvm@gJdUiFjOsBtg@gL~^{JnKgE|g@gT`J{ArYI~RnAnZnDvXnA|PMlEz@dDzE~@lI{BzG_Dq@`@oFbD|@HjJqDbDoA}DnCwBzBhGgBzHyC_BbAmE~I[bDm@v[_NfRaFrMuEtx@a^dP{EtYkDrOH~LdB`}@~GnMdDlEExAmGMwIoVgjDsHebBgKqxBaG_wAgEgkAoBkf@y@yIc@gI??EI";
    var format = new OpenLayers.Format.EncodedPolyline({geometryType:"polygon"});
    var vector_layer = new OpenLayers.Layer.Vector();
    map.addLayer(vector_layer);
    vector_layer.addFeatures(format.read(encoded));

var route = /** @type {import("../src/ol/geom/LineString.js").default} */ (new Polyline(
    {
        factor: 1e6,
    }
    ).readGeometry(polyline, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857',
    }));

    var routeCoords = route.getCoordinates();
    var routeLength = routeCoords.length;
    
    var routeFeature = new Feature({
      type: 'route',
      geometry: route,
    });
    var geoMarker = /** @type Feature<import("../src/ol/geom/Point").default> */ (new Feature(
      {
        type: 'geoMarker',
        geometry: new Point(routeCoords[0]),
      }))
